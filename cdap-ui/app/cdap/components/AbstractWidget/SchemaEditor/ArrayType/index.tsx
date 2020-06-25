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
import { schemaTypes } from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import { SingleColumnWrapper } from 'components/AbstractWidget/SchemaEditor/SingleColumnWrapper';
import Select from 'components/AbstractWidget/FormInputs/Select';
import { IFieldTypeBaseProps } from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { RowButtons } from 'components/AbstractWidget/SchemaEditor/RowButtons';

const ArrayType = ({ ancestors, type, nullable, onChange, autoFocus }: IFieldTypeBaseProps) => {
  const [fieldType, setFieldType] = React.useState(type);
  const [fieldNullable, setFieldNullable] = React.useState(nullable);
  const inputEle = React.useRef(null);
  React.useEffect(() => {
    if (autoFocus) {
      if (inputEle.current) {
        inputEle.current.focus();
      }
    }
  }, [autoFocus]);
  return (
    <React.Fragment>
      <SingleColumnWrapper>
        <Select
          value={fieldType}
          onChange={(newValue) => {
            setFieldType(newValue);
            onChange('type', newValue);
          }}
          widgetProps={{ options: schemaTypes, dense: true }}
          inputRef={(ref) => (inputEle.current = ref)}
        />
      </SingleColumnWrapper>
      <RowButtons
        nullable={fieldNullable}
        onNullable={(checked) => {
          setFieldNullable(checked);
          onChange('nullable', checked);
        }}
      />
    </React.Fragment>
  );
};

export { ArrayType };
