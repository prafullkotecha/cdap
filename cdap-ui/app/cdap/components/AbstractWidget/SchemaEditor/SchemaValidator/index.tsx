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
import { SchemaGenerator } from 'components/AbstractWidget/SchemaEditor/Context/SchemaGenerator';
import { ISchemaType } from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import isNil from 'lodash/isNil';

interface ISchemaValidatorProviderBaseState {
  id: string;
  time: number;
  error: string;
}
interface ISchemaValidatorContext extends ISchemaValidatorProviderBaseState {
  validate: (id: string, avroSchema: ISchemaType) => ISchemaValidatorProviderBaseState;
}
const SchemaValidatorContext = React.createContext<ISchemaValidatorContext>({
  id: null,
  time: null,
  error: null,
  validate: null,
});
const SchemaValidatorConsumer = SchemaValidatorContext.Consumer;

class SchemaValidatorProvider extends React.Component {
  public defaultState = {
    id: null,
    time: null,
    error: null,
  };

  private validate = (id, schemaTree) => {
    const avroSchema = SchemaGenerator(schemaTree);
    console.log('validating...');
    try {
      const validSchema = cdapavsc.parse(avroSchema.schema, { wrapUnions: true });
    } catch (e) {
      if (!isNil(this.state.error) && e.message === this.state.error) {
        return;
      }
      this.setState({
        id,
        time: Date.now(),
        error: e.message,
      });
      console.log('bonkers: ', e);
      return;
    }
    this.reset();
  };

  private reset = () => {
    if (this.state.error === null && this.state.id === null) {
      return;
    }
    this.setState({
      ...this.defaultState,
    });
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
