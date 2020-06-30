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

import isObject from 'lodash/isObject';
import { INode } from 'components/AbstractWidget/SchemaEditor/Context/SchemaParser';
import { IFlattenRowType } from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { ISchemaTreeOptions } from 'components/AbstractWidget/SchemaEditor/Context/SchemaTree';
import { isNilOrEmpty } from 'services/helpers';

function FlatSchemaBase(
  schemaTree: INode,
  options: ISchemaTreeOptions,
  ancestors = [],
  isParentCollapsed = false
) {
  const result: IFlattenRowType[] = [];
  if (!schemaTree) {
    return [];
  }
  const { internalType, name, id, children, type, typeProperties, nullable } = schemaTree;
  const hasChildren = isObject(children) && Object.keys(children).length;
  const collapsed = hasChildren && internalType !== 'schema' ? options.collapseAll : null;
  result.push({
    internalType,
    name,
    id,
    type,
    typeProperties,
    ancestors,
    nullable,
    collapsed,
    hidden: isParentCollapsed,
  });
  if (hasChildren) {
    let iterable;
    if (Array.isArray(children.order) && children.order.length) {
      iterable = children.order;
      for (const childId of iterable) {
        result.push(...FlatSchemaBase(children[childId], options, ancestors.concat(id), collapsed));
      }
    } else {
      iterable = children;
      for (const [_, value] of Object.entries<INode>(iterable)) {
        result.push(...FlatSchemaBase(value, options, ancestors.concat(id), collapsed));
      }
    }
  }
  return result;
}
function FlatSchema(schemaTree: INode, options: ISchemaTreeOptions, ancestors = []) {
  // if (isNilOrEmpty(options) || (isObject(options) && isNilOrEmpty(options.collapseAll))) {
  //   const size = JSON.stringify(schemaTree).length;
  //   if (size > 100000) {
  //     options.collapseAll = true;
  //   }
  // }
  return FlatSchemaBase(schemaTree, options, ancestors);
}
export { FlatSchema };
