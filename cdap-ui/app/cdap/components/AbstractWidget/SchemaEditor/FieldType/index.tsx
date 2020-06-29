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
import { FieldInputWrapper } from 'components/AbstractWidget/SchemaEditor/FieldWrapper';
import TextBox from 'components/AbstractWidget/FormInputs/TextBox';
import Select from 'components/AbstractWidget/FormInputs/Select';
import { schemaTypes } from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import { IFieldTypeBaseProps } from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { RowButtons } from 'components/AbstractWidget/SchemaEditor/RowButtons';

const FieldTypeBase = ({
  name,
  type,
  nullable,
  onChange,
  onAdd,
  onRemove,
  autoFocus,
}: IFieldTypeBaseProps) => {
  const [fieldName, setFieldName] = React.useState(name);
  const [fieldType, setFieldType] = React.useState(type);
  const [fieldNullable, setFieldNullable] = React.useState(nullable);
  const inputEle = React.useRef(null);
  React.useEffect(() => {
    if (autoFocus) {
      if (inputEle.current) {
        inputEle.current.focus();
        inputEle.current.select();
      }
    }
  }, [autoFocus]);
  const onNullable = (checked) => {
    setFieldNullable(checked);
    onChange('nullable', checked);
  };
  const onChangeHandler = (newValue) => {
    setFieldName(newValue);
    onChange('name', newValue);
  };
  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.keyCode === 13) {
      onAdd();
    }
  };
  const onTypeChangeHandler = (newValue) => {
    setFieldType(newValue);
    onChange('type', newValue);
  };
  const inputRef = (ref) => {
    inputEle.current = ref;
  };
  return (
    <React.Fragment>
      <FieldInputWrapper>
        <TextBox
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          widgetProps={{ placeholder: 'name' }}
          value={fieldName}
          autoFocus={autoFocus}
          inputRef={inputRef}
        />
        <Select
          value={fieldType}
          onChange={onTypeChangeHandler}
          widgetProps={{ options: schemaTypes, dense: true }}
        />
      </FieldInputWrapper>
      <RowButtons
        nullable={fieldNullable}
        onNullable={type === 'union' ? undefined : onNullable}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </React.Fragment>
  );
};

const FieldType = React.memo(FieldTypeBase);
export { FieldType };
