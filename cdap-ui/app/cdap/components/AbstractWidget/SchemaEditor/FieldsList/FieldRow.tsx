/*
 * Copyright © 2019 Cask Data, Inc.
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
import {
  IFlattenRowType,
  IFieldIdentifier,
  IOnChangePayload,
} from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { schemaTypes } from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import { FieldType } from 'components/AbstractWidget/SchemaEditor/FieldType';
import { UnionType } from 'components/AbstractWidget/SchemaEditor/UnionType';
import { MapType } from 'components/AbstractWidget/SchemaEditor/MapType';
import { EnumType } from 'components/AbstractWidget/SchemaEditor/EnumType';
import { ArrayType } from 'components/AbstractWidget/SchemaEditor/ArrayType';
import { FieldWrapper } from 'components/AbstractWidget/SchemaEditor/FieldWrapper';
import { SchemaValidatorConsumer } from 'components/AbstractWidget/SchemaEditor/SchemaValidator';
import If from 'components/If';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import classnames from 'classnames';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme): StyleRules => {
  return {
    errorIcon: {
      position: 'absolute',
      right: '0',
      color: theme.palette.red[200],
    },
    erroredRow: {
      outline: `2px solid ${theme.palette.red[200]}`,
    },
    tooltip: {
      backgroundColor: theme.palette.red[200],
      color: 'white',
      fontSize: '12px',
      wordBreak: 'break-word',
    },
  };
};

interface IFieldRowState {
  name: string;
  type: string;
  nullable: boolean;
  typeProperties: Record<string, string>;
}

interface IFieldRowProps extends WithStyles<typeof styles> {
  field: IFlattenRowType;
  onChange: (id: IFieldIdentifier, payload: IOnChangePayload) => void;
  autoFocus?: boolean;
}

class FieldRowBase extends React.Component<IFieldRowProps, IFieldRowState> {
  public state: IFieldRowState = {
    name: '',
    type: schemaTypes[0],
    nullable: false,
    typeProperties: {},
  };

  constructor(props) {
    super(props);
    const { field } = this.props;
    this.state = {
      name: field.name,
      type: field.type,
      nullable: field.nullable,
      typeProperties: field.typeProperties,
    };
  }

  public componentWillReceiveProps() {
    return;
  }

  public onChange = (property: string, value) => {
    if (['name', 'type', 'nullable', 'typeProperties'].indexOf(property) === -1) {
      return;
    }
    const { onChange, field } = this.props;
    if (onChange) {
      this.props.onChange(
        { id: field.id, ancestors: field.ancestors },
        {
          property,
          value,
          type: 'update',
        }
      );
    }
    return;
  };

  public onAdd = () => {
    const { onChange, field } = this.props;
    const { id, ancestors } = field;
    if (onChange) {
      this.props.onChange(
        { id, ancestors },
        {
          type: 'add',
        }
      );
    }
  };

  public onRemove = () => {
    const { onChange, field } = this.props;
    const { id, ancestors } = field;
    if (onChange) {
      onChange({ id, ancestors }, { type: 'remove' });
    }
  };

  public RenderSubType = (field) => {
    switch (field.internalType) {
      case 'record-field-simple-type':
      case 'record-field-complex-type-root':
        return (
          <FieldType
            name={this.props.field.name}
            type={this.props.field.type}
            nullable={this.props.field.nullable}
            onChange={this.onChange}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            autoFocus={this.props.autoFocus}
          />
        );
      case 'array-simple-type':
      case 'array-complex-type':
      case 'array-complex-type-root':
        return (
          <ArrayType
            type={this.props.field.type}
            nullable={this.props.field.nullable}
            onChange={this.onChange}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            autoFocus={this.props.autoFocus}
          />
        );
      case 'enum-symbol':
        return (
          <EnumType
            typeProperties={this.props.field.typeProperties}
            onChange={this.onChange}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            autoFocus={this.props.autoFocus}
          />
        );
      case 'map-keys-complex-type-root':
      case 'map-keys-simple-type':
      case 'map-values-complex-type-root':
      case 'map-values-simple-type':
        return (
          <MapType
            internalType={this.props.field.internalType}
            type={this.props.field.type}
            nullable={this.props.field.nullable}
            onChange={this.onChange}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            autoFocus={this.props.autoFocus}
          />
        );
      case 'union-simple-type':
      case 'union-complex-type-root':
        return (
          <UnionType
            type={this.props.field.type}
            nullable={this.props.field.nullable}
            onChange={this.onChange}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            autoFocus={this.props.autoFocus}
          />
        );
      default:
        return null;
    }
  };

  public render() {
    console.log('Re-rendering every row');
    const { classes } = this.props;
    const { ancestors, internalType } = this.props.field;
    if (internalType === 'schema') {
      return null;
    }
    return (
      <SchemaValidatorConsumer>
        {({ errorMap = {} }) => {
          const hasError = errorMap.hasOwnProperty(this.props.field.id);
          return (
            <FieldWrapper
              ancestors={ancestors}
              className={classnames({
                [classes.erroredRow]: hasError,
              })}
            >
              <React.Fragment>
                <If condition={hasError}>
                  <Tooltip
                    classes={{ tooltip: classes.tooltip }}
                    title={errorMap[this.props.field.id]}
                    placement="right"
                  >
                    <ErrorIcon className={classes.errorIcon} />
                  </Tooltip>
                </If>
                {this.RenderSubType(this.props.field)}
              </React.Fragment>
            </FieldWrapper>
          );
        }}
      </SchemaValidatorConsumer>
    );
  }
}

const FieldRow = React.memo(withStyles(styles)(FieldRowBase));
export { FieldRow };
