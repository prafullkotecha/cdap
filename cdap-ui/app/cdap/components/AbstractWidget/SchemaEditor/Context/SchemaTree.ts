/*
 * Copyright © 2020 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import {
  IFlattenRowType,
  IFieldIdentifier,
  IOnChangePayload,
} from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import uuidV4 from 'uuid/v4';
import isNil from 'lodash/isNil';
import {
  logicalTypes,
  defaultTimeStampTypeProperties,
  defaultDecimalTypeProperties,
  defaultTimeTypeProperties,
  defaultDateTypeProperties,
  defaultArrayType,
  defaultEnumType,
  defaultMapType,
  defaultRecordType,
  defaultUnionType,
} from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import isEmpty from 'lodash/isEmpty';
import {
  INode,
  parseSchema,
  parseUnionType,
  parseArrayType,
  parseEnumType,
  parseMapType,
  IOrderedChildren,
  parseComplexType,
} from 'components/AbstractWidget/SchemaEditor/Context/SchemaParser';
import { FlatSchema } from 'components/AbstractWidget/SchemaEditor/Context/FlatSchema';
import { ISchemaType } from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import { SchemaGenerator } from 'components/AbstractWidget/SchemaEditor/Context/SchemaGenerator';
import isObject from 'lodash/isObject';

function getInternalType(tree: INode) {
  const hasChildren = tree.children ? Object.keys(tree.children).length : 0;
  if (tree.internalType === 'record-field-simple-type' && hasChildren) {
    return 'record-field-complex-type-root';
  }
  if (tree.internalType === 'record-field-complex-type-root' && !hasChildren) {
    return 'record-field-simple-type';
  }
  if (tree.internalType === 'union-simple-type' && hasChildren) {
    return 'union-complex-type-root';
  }
  if (tree.internalType === 'union-complex-type-root' && !hasChildren) {
    return 'union-simple-type';
  }
  if (tree.internalType === 'array-simple-type' && hasChildren) {
    return 'array-complex-type-root';
  }
  if (tree.internalType === 'array-complex-type-root' && !hasChildren) {
    return 'array-simple-type';
  }
  if (tree.internalType === 'map-keys-simple-type' && hasChildren) {
    return 'map-keys-complex-type-root';
  }
  if (tree.internalType === 'map-keys-complex-type-root' && hasChildren) {
    return 'map-keys-simple-type';
  }
  if (tree.internalType === 'map-values-simple-type' && hasChildren) {
    return 'map-values-complex-type-root';
  }
  if (tree.internalType === 'map-values-complex-type-root' && hasChildren) {
    return 'map-values-simple-type';
  }
  return tree.internalType;
}

const branchCount = (tree: INode): number => {
  let count = 0;
  if (tree && !isEmpty(tree.children) && Object.keys(tree.children).length) {
    // skip 'order' array which is under children.
    const children = Object.values(tree.children).filter((child) => !Array.isArray(child));
    count += children.length;
    children.forEach((child: INode) => {
      count += branchCount(child);
    });
  }
  return count;
};

const initChildren = (type): IOrderedChildren => {
  switch (type) {
    case 'array':
      return parseArrayType(defaultArrayType);
    case 'enum':
      return parseEnumType(defaultEnumType);
    case 'map':
      return parseMapType(defaultMapType);
    case 'record': {
      return parseComplexType(defaultRecordType);
    }
    case 'union':
      return parseUnionType(defaultUnionType);
    default:
      return;
  }
};

const initTypeProperties = (tree: INode) => {
  if (logicalTypes.indexOf(tree.type) === -1) {
    return {};
  }
  switch (tree.type) {
    case 'decimal':
      return defaultDecimalTypeProperties;
    case 'time':
      return defaultTimeTypeProperties;
    case 'timestamp':
      return defaultTimeStampTypeProperties;
    case 'date':
      return defaultDateTypeProperties;
    default:
      return {};
  }
};

interface ISchemaTreeOptions {
  collapseAll: boolean;
}

interface ISchemaTree {
  getSchemaTree: () => INode;
  getFlatSchema: () => IFlattenRowType[];
  getAvroSchema: () => ISchemaType;
  onChange: (
    currentIndex: number,
    fieldId: IFieldIdentifier,
    onChangePayload: IOnChangePayload
  ) => IOnChangeReturnType;
}

interface IOnChangeReturnType {
  fieldIdToFocus?: string;
  fieldIndex?: number;
  nodeDepth?: number;
}

class SchemaTreeBase implements ISchemaTree {
  private schemaTree: INode;
  private flatTree: IFlattenRowType[];
  private options: ISchemaTreeOptions;
  constructor(avroSchema, options: ISchemaTreeOptions) {
    this.schemaTree = parseSchema(avroSchema);
    this.flatTree = FlatSchema(this.schemaTree, options);
    this.options = options;
  }

  public getSchemaTree = () => this.schemaTree;
  public getFlatSchema = () => this.flatTree;
  public getAvroSchema = () => SchemaGenerator(this.schemaTree);

  private insertNewIdToOrder = (order = [], referenceId) => {
    const id = uuidV4();
    // +1 to add next to the current element.
    const currentIndexOfChild = order.findIndex((c) => c === referenceId) + 1;
    order = [...order.slice(0, currentIndexOfChild), id, ...order.slice(currentIndexOfChild)];
    return { id, order };
  };

  private addNewEnumSymbol = (tree: INode, fieldId: IFieldIdentifier) => {
    if (!tree.children || (tree.children && !Array.isArray(tree.children.order))) {
      return { tree, newTree: undefined, currentField: undefined };
    }
    const { id = uuidV4(), order = [] } = this.insertNewIdToOrder(
      tree.children.order as string[],
      fieldId.id
    );
    tree.children.order = order;
    const newlyAddedField = {
      id,
      internalType: 'enum-symbol',
      typeProperties: {
        symbol: '',
      },
    };
    tree.children[id] = newlyAddedField;
    return {
      tree,
      newTree: tree.children[id],
      currentField: tree.children[fieldId.id],
      newlyAddedField,
    };
  };

  private addNewFieldType = (tree: INode, fieldId: IFieldIdentifier) => {
    if (!tree.children || (tree.children && !Array.isArray(tree.children.order))) {
      return { tree, newTree: undefined, currentField: undefined };
    }
    const { id = uuidV4(), order = [] } = this.insertNewIdToOrder(
      tree.children.order as string[],
      fieldId.id
    );
    tree.children.order = order;
    const newlyAddedField = {
      id,
      internalType: 'record-field-simple-type',
      nullable: false,
      type: 'string',
      name: '',
    };
    tree.children[id] = newlyAddedField;
    return {
      tree,
      newTree: tree.children[id],
      currentField: tree.children[fieldId.id],
      newlyAddedField,
    };
  };

  private addNewUnionType = (tree: INode, fieldId: IFieldIdentifier) => {
    if (!tree.children || (tree.children && !Array.isArray(tree.children.order))) {
      return { tree, newTree: undefined, currentField: undefined };
    }
    const { id = uuidV4(), order = [] } = this.insertNewIdToOrder(
      tree.children.order as string[],
      fieldId.id
    );
    tree.children.order = order;
    const newlyAddedField = {
      id,
      internalType: 'union-simple-type',
      nullable: false,
      type: 'string',
    };
    tree.children[id] = newlyAddedField;
    return {
      tree,
      newTree: tree.children[id],
      currentField: tree.children[fieldId.id],
      newlyAddedField,
    };
  };

  private addSpecificTypesToTree = (tree: INode, fieldId: IFieldIdentifier) => {
    switch (tree.type) {
      case 'enum':
        return this.addNewEnumSymbol(tree, fieldId);
      case 'record':
        return this.addNewFieldType(tree, fieldId);
      case 'union':
        return this.addNewUnionType(tree, fieldId);
      default:
        return { tree: undefined, newTree: undefined, currentField: undefined };
    }
  };

  private addToTree = (
    tree: INode,
    fieldId: IFieldIdentifier
  ): {
    tree: INode;
    newTree: INode;
    currentField: INode;
  } => {
    if (!tree) {
      return { tree: undefined, newTree: undefined, currentField: undefined };
    }
    if (fieldId.ancestors.length === 1) {
      return this.addSpecificTypesToTree(tree, fieldId);
    }
    const { tree: child, newTree, currentField } = this.addToTree(
      tree.children[fieldId.ancestors[1]],
      { id: fieldId.id, ancestors: fieldId.ancestors.slice(1) }
    );
    return {
      tree: {
        ...tree,
        children: {
          ...tree.children,
          [child.id]: child,
        },
      },
      newTree,
      currentField,
    };
  };

  private removeFromTree = (tree: INode, fieldId) => {
    if (!tree) {
      return { tree: undefined };
    }
    if (fieldId.ancestors.length === 1) {
      const field = { ...tree.children[fieldId.id] };
      let newField;
      if (Array.isArray(tree.children.order) && Object.keys(tree.children).length === 2) {
        const {
          tree: treeWithDefaultChild,
          newlyAddedField: defaultNewField,
        } = this.addSpecificTypesToTree(tree, fieldId);
        newField = defaultNewField;
        tree = treeWithDefaultChild;
      }
      if (Array.isArray(tree.children.order)) {
        tree.children.order = tree.children.order.filter((id) => id !== fieldId.id);
      }
      delete tree.children[fieldId.id];
      return { tree, removedField: field, newlyAddedField: newField };
    }
    const { tree: newTree, removedField, newlyAddedField } = this.removeFromTree(
      tree.children[fieldId.ancestors[1]],
      { id: fieldId.id, ancestors: fieldId.ancestors.slice(1) }
    );
    return {
      tree: {
        ...tree,
        children: {
          ...tree.children,
          ...newTree,
        },
      },
      removedField,
      newlyAddedField,
    };
  };

  private remove = (currentIndex: number): IOnChangeReturnType => {
    const matchingEntry = this.flatTree[currentIndex];
    const idObj = { id: matchingEntry.id, ancestors: matchingEntry.ancestors };
    const { tree, removedField, newlyAddedField } = this.removeFromTree(this.schemaTree, idObj);
    this.schemaTree = tree;
    const childrenInBranch = branchCount(removedField);
    let newFlatSubTree = [];
    if (newlyAddedField) {
      newFlatSubTree = FlatSchema(newlyAddedField, this.options, matchingEntry.ancestors);
    }
    this.flatTree = [
      ...this.flatTree.slice(0, currentIndex),
      ...newFlatSubTree,
      ...this.flatTree.slice(currentIndex + 1 + childrenInBranch),
    ];
    return { fieldIdToFocus: this.flatTree[currentIndex - 1].id, fieldIndex: currentIndex - 1 };
  };

  private updateTree = (
    tree: INode,
    fieldId: IFieldIdentifier,
    { property, value }: Partial<IOnChangePayload>
  ): {
    tree: INode;
    childrenCount: number;
    newTree: INode;
  } => {
    if (!tree) {
      return { childrenCount: undefined, tree: undefined, newTree: undefined };
    }
    if (fieldId.ancestors.length === 1 && !isEmpty(tree.children[fieldId.id])) {
      tree.children[fieldId.id][property] = value;
      let childrenInBranch = 0;
      let newChildTree: INode;
      if (property === 'type') {
        childrenInBranch = branchCount(tree.children[fieldId.id]);
        tree.children[fieldId.id].children = initChildren(value);
        newChildTree = tree.children[fieldId.id];
        tree.children[fieldId.id].internalType = getInternalType(tree.children[fieldId.id]);
        tree.children[fieldId.id].typeProperties = initTypeProperties(tree.children[fieldId.id]);
      }
      return {
        tree,
        childrenCount: childrenInBranch,
        newTree: newChildTree,
      };
    }

    const { tree: child, childrenCount, newTree } = this.updateTree(
      tree.children[fieldId.ancestors[1]],
      { id: fieldId.id, ancestors: fieldId.ancestors.slice(1) },
      { property, value }
    );
    return {
      tree: {
        ...tree,
        children: {
          ...tree.children,
          [child.id]: child,
        },
      },
      childrenCount,
      newTree,
    };
  };

  private update = (
    currentIndex: number,
    { property, value }: Partial<IOnChangePayload>
  ): IOnChangeReturnType => {
    this.flatTree[currentIndex][property] = value;
    const matchingEntry = this.flatTree[currentIndex];
    let result: { tree: INode; childrenCount: number; newTree: INode };
    let newFlatSubTree: IFlattenRowType[];
    const idObj = { id: matchingEntry.id, ancestors: matchingEntry.ancestors };
    result = this.updateTree(this.schemaTree, idObj, { property, value });
    this.schemaTree = result.tree;
    this.flatTree = [
      ...this.flatTree.slice(0, currentIndex),
      ...this.flatTree.slice(currentIndex + result.childrenCount + (!result.newTree ? 0 : 1)),
    ];
    if (result.newTree) {
      newFlatSubTree = FlatSchema(result.newTree, this.options, matchingEntry.ancestors);
      this.flatTree = [
        ...this.flatTree.slice(0, currentIndex),
        ...newFlatSubTree,
        ...this.flatTree.slice(currentIndex),
      ];
    }
    // newFlatSubTree will be of length 1 for simple type changes.
    if (Array.isArray(newFlatSubTree) && newFlatSubTree.length > 1) {
      return { fieldIdToFocus: this.flatTree[currentIndex + 1].id, fieldIndex: currentIndex + 1 };
    }
    return {};
  };

  private add = (currentIndex): IOnChangeReturnType => {
    const matchingEntry = this.flatTree[currentIndex];
    let result: { tree: INode; newTree: INode; currentField: INode };
    let newFlatSubTree: IFlattenRowType[];
    const idObj = { id: matchingEntry.id, ancestors: matchingEntry.ancestors };
    result = this.addToTree(this.schemaTree, idObj);
    newFlatSubTree = FlatSchema(result.newTree, this.options, matchingEntry.ancestors);
    this.schemaTree = result.tree;
    const currentFieldBranchCount = branchCount(result.currentField);
    this.flatTree = [
      ...this.flatTree.slice(0, currentIndex + currentFieldBranchCount + 1),
      ...newFlatSubTree,
      ...this.flatTree.slice(currentIndex + currentFieldBranchCount + 1),
    ];
    return {
      fieldIdToFocus: this.flatTree[currentIndex + currentFieldBranchCount + 1].id,
      fieldIndex: currentIndex + currentFieldBranchCount + 1,
    };
  };

  private getFieldObjFromTree = (fieldObj, schemaTree: INode): INode => {
    if (fieldObj.id === schemaTree.id) {
      return schemaTree;
    }
    if (fieldObj.ancestors.length === 1) {
      return schemaTree.children[fieldObj.id];
    }
    return this.getFieldObjFromTree(
      { id: fieldObj.id, ancestors: fieldObj.ancestors.slice(1) },
      schemaTree.children[fieldObj.ancestors[1]]
    );
  };

  private collapse = (fieldId: IFieldIdentifier): IOnChangeReturnType => {
    const matchingIndex = this.flatTree.findIndex((row) => row.id === fieldId.id);
    const matchingEntry = this.flatTree[matchingIndex];
    if (!matchingEntry) {
      return {};
    }
    const idObj = { id: matchingEntry.id, ancestors: matchingEntry.ancestors };
    const fieldObj = this.getFieldObjFromTree(idObj, this.getSchemaTree());
    this.flatTree[matchingIndex].collapsed = !this.flatTree[matchingIndex].collapsed;
    const nodeDepth = this.calculateNodeDepthMap(fieldObj);
    for (let i = 1; i <= nodeDepth; i++) {
      if (typeof this.flatTree[matchingIndex + i].collapsed === 'boolean') {
        this.flatTree[matchingIndex + i].collapsed = this.flatTree[matchingIndex].collapsed;
      }
      this.flatTree[matchingIndex + i].hidden = this.flatTree[matchingIndex].collapsed;
    }
    return {};
  };

  private calculateNodeDepthMap = (tree: INode): number => {
    let totalDepth = 0;
    if (isObject(tree.children) && Object.keys(tree.children).length) {
      totalDepth += Object.keys(tree.children).filter((c) => c !== 'order').length;
      for (const childId of Object.keys(tree.children)) {
        if (childId === 'order') {
          continue;
        }
        const childCount = this.calculateNodeDepthMap(tree.children[childId]);
        totalDepth += childCount;
      }
    }
    return totalDepth;
  };

  public onChange = (
    currentIndex: number,
    fieldId: IFieldIdentifier,
    { type, property, value }: IOnChangePayload
  ): IOnChangeReturnType => {
    if (isNil(currentIndex) || currentIndex === -1) {
      return;
    }
    switch (type) {
      case 'update':
        return this.update(currentIndex, { property, value });
      case 'add':
        return this.add(currentIndex);
      case 'remove':
        return this.remove(currentIndex);
      case 'collapse':
        return this.collapse(fieldId);
    }
  };
}

const defaultOptions: ISchemaTreeOptions = {
  collapseAll: false,
};

function SchemaTree(avroSchema, options: ISchemaTreeOptions = defaultOptions) {
  if (!options) {
    options = defaultOptions;
  } else {
    options = {
      ...defaultOptions,
      ...options,
    };
  }
  const schemaTreeInstance = new SchemaTreeBase(avroSchema, options);
  return {
    getInstance: () => schemaTreeInstance,
  };
}
export { SchemaTree, INode, ISchemaTree, IOnChangeReturnType, ISchemaTreeOptions };
