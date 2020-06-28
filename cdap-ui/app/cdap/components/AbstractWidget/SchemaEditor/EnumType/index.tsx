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
import TextBox from 'components/AbstractWidget/FormInputs/TextBox';
import { IFieldTypeBaseProps } from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { RowButtons } from 'components/AbstractWidget/SchemaEditor/RowButtons';

const EnumTypeBase = ({
  typeProperties,
  onChange,
  onAdd,
  onRemove,
  autoFocus,
}: IFieldTypeBaseProps) => {
  const { symbol } = typeProperties;
  const [enumSymbol, setEnumSymbol] = React.useState(symbol);
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
      <TextBox
        value={enumSymbol}
        onKeyPress={(event: React.KeyboardEvent) => {
          if (event.nativeEvent.keyCode === 13) {
            onAdd();
          }
        }}
        onChange={(value) => {
          setEnumSymbol(value);
          onChange('typeProperties', {
            symbol: value,
          });
        }}
        widgetProps={{ placeholder: 'symbol' }}
        inputRef={(ref) => (inputEle.current = ref)}
      />
      <RowButtons onRemove={onRemove} onAdd={onAdd} />
    </React.Fragment>
  );
};
const EnumType = React.memo(EnumTypeBase);
export { EnumType };
