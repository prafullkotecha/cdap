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

import { INode } from 'components/AbstractWidget/SchemaEditor/Context/SchemaParser';
import { ISchemaType } from 'components/AbstractWidget/SchemaEditor/SchemaTypes';

function SchemaGenerator(schemaTree: INode) {
  const avroSchema: ISchemaType = {
    name: 'etlSchemaBody',
    schema: {
      name: 'etlSchemaBody',
      type: 'record',
      fields: [],
    },
  };
  if (!schemaTree) {
    return avroSchema;
  }
  const { order } = schemaTree.children;
  let children: Record<string, INode>;
    if (!order) {
    children = schemaTree.children;
  }
  for (let childId of order) {

  }
}
