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
  IComplexTypeNames,
  ISimpleType,
  ILogicalTypeNames,
} from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import { logicalTypeToSimpleTypeMap } from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import cloneDeep from 'lodash/cloneDeep';

const displayTypes: Array<ISimpleType | IComplexTypeNames | ILogicalTypeNames> = [
  'array',
  'enum',
  'map',
  'record',
  'union',
  'boolean',
  'bytes',
  'date',
  'decimal',
  'double',
  'float',
  'int',
  'long',
  'number',
  'string',
  'time',
  'timestamp-micros',
  'date',
  'time-micros',
  'decimal',
];

const isNullable = (type) => {
  if (Array.isArray(type)) {
    return type.find((t) => t === 'null') === 'null';
  }
  return false;
};

const isUnion = (type) => {
  return Array.isArray(type) && !isNullable(type);
};

const getNonNullableType = (type) => {
  if (Array.isArray(type) && !isUnion(type)) {
    const nonNullTypes = type.filter((t) => t !== 'null');
    if (nonNullTypes.length === 1 && type.length - 1 === nonNullTypes.length) {
      return nonNullTypes[0];
    }
  }
  return type;
};

const getSimpleType = (type) => {
  if (typeof type === 'string') {
    return type;
  }
  if (type && type.logicalType) {
    return logicalTypeToSimpleTypeMap[type.logicalType];
  }
  return type;
};

const isComplexType = (complexType) => {
  const nullable = isNullable(complexType);
  let type = complexType;
  if (nullable) {
    type = complexType.filter((t) => t !== 'null').pop();
  }
  if (typeof type === 'string') {
    return false;
  }
  switch (type.type) {
    case 'record':
    case 'enum':
    case 'array':
    case 'map':
      return true;
    default:
      return isUnion(complexType) ? true : false;
  }
};

const getComplexTypeName = (complexType): IComplexTypeNames => {
  const c = cloneDeep(complexType);
  let type;
  if (isNullable(complexType)) {
    type = complexType.filter((t) => t !== 'null').pop();
    type = type.type;
  } else {
    type = c.type;
  }
  switch (type) {
    case 'record':
    case 'enum':
    case 'array':
    case 'map':
      return type;
    default:
      return isUnion(c) ? 'union' : undefined;
  }
};

export {
  isNullable,
  isUnion,
  isComplexType,
  getNonNullableType,
  getComplexTypeName,
  displayTypes,
  getSimpleType,
};
