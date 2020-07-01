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

import * as React from 'react';
import cdapavsc from 'services/cdapavscwrapper';
import {
  SchemaGenerator,
  generateSchemaFromComplexType,
} from 'components/AbstractWidget/SchemaEditor/Context/SchemaGenerator';
import { ISchemaType } from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import { IFlattenRowType } from '../EditorTypes';

interface ISchemaValidatorProviderBaseState {
  id: string;
  time: number;
  error: string;
}
interface ISchemaValidatorContext {
  validate: (id: string, avroSchema: ISchemaType) => ISchemaValidatorProviderBaseState;
  errorMap: Record<string, ISchemaValidatorProviderBaseState>;
}
const SchemaValidatorContext = React.createContext<ISchemaValidatorContext>({
  validate: null,
  errorMap: {},
});
const SchemaValidatorConsumer = SchemaValidatorContext.Consumer;

class SchemaValidatorProvider extends React.Component {
  public defaultState = {
    errorMap: {},
  };

  private isSubTreeValidAvroSchema = (field: IFlattenRowType, schemaTree) => {
    const { id, ancestors } = field;
    if (!ancestors || (Array.isArray(ancestors) && !ancestors.length)) {
      return;
    }
    if (ancestors.length === 1) {
      try {
        const entireSchema = SchemaGenerator(schemaTree);
        cdapavsc.parse(entireSchema.schema, { wrapUnions: true });
      } catch (e) {
        return { error: e.message, fieldIdToShowError: ancestors[0] };
      }
      return;
    }
    const validateSchema = (tree) => {
      const avroSchema = generateSchemaFromComplexType(tree.type, tree, tree.nullable);
      try {
        cdapavsc.parse(avroSchema, { wrapUnions: true });
      } catch (e) {
        return { error: e.message, fieldIdToShowError: tree.id };
      }
    };
    const goToLowestParent = (parents, tree) => {
      if (parents.length === 1) {
        return validateSchema(tree.children[parents[0]]);
      }
      return goToLowestParent(parents.slice(1), tree.children[parents[0]]);
    };
    return goToLowestParent(ancestors.slice(1), schemaTree);
  };

  private validateSpecificField = (field, schemaTree) => {
    const errorObj = this.isSubTreeValidAvroSchema(field, schemaTree);
    if (!errorObj) {
      const { errorMap } = this.state;
      field.ancestors.forEach((ancestorId) => {
        if (errorMap.hasOwnProperty(ancestorId)) {
          delete errorMap[ancestorId];
        }
      });
      if (errorMap.hasOwnProperty(field.id)) {
        delete errorMap[field.id];
      }
      this.setState({ errorMap });
      return;
    }
    const { fieldIdToShowError, error } = errorObj;
    this.setState({
      errorMap: {
        ...this.state.errorMap,
        [fieldIdToShowError]: error,
      },
    });
  };

  private validate = (currentFieldId, schemaTree) => {
    this.validateSpecificField(currentFieldId, schemaTree);
  };

  public state = {
    ...this.defaultState,
    validate: this.validate.bind(this),
  };

  public render() {
    return (
      <SchemaValidatorContext.Provider value={this.state}>
        {this.props.children}
      </SchemaValidatorContext.Provider>
    );
  }
}
export { SchemaValidatorProvider, SchemaValidatorConsumer };
