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
import withStyles, { WithStyles, StyleRules } from '@material-ui/styles/withStyles';
import ThemeWrapper from 'components/ThemeWrapper';
import {
  SchemaTree,
  INode,
  ISchemaTree,
  IOnChangeReturnType,
} from 'components/AbstractWidget/SchemaEditor/Context/SchemaTree';
import { ISchemaType } from 'components/AbstractWidget/SchemaEditor/SchemaTypes';
import {
  IFlattenRowType,
  IFieldIdentifier,
  IOnChangePayload,
} from 'components/AbstractWidget/SchemaEditor/EditorTypes';
import { FieldsList } from 'components/AbstractWidget/SchemaEditor/FieldsList';
import {
  SchemaValidatorConsumer,
  SchemaValidatorProvider,
} from 'components/AbstractWidget/SchemaEditor/SchemaValidator';

const styles = (theme): StyleRules => {
  return {
    schemaContainer: {
      width: '100%',
      height: '100%',
    },
  };
};

interface ISchemaEditorProps extends WithStyles<typeof styles> {
  schema: ISchemaType;
  onChange: (props: {
    tree: INode;
    flat: IFlattenRowType[];
    avroSchema: ISchemaType;
  }) => IOnChangeReturnType;
}

interface ISchemaEditorState {
  tree: INode;
  flat: IFlattenRowType[];
}

class SchemaEditor extends React.Component<ISchemaEditorProps, ISchemaEditorState> {
  private schema: ISchemaTree = null;
  constructor(props) {
    super(props);
    const { options } = props;
    this.schema = SchemaTree(this.props.schema, options).getInstance();
    this.state = {
      flat: this.schema.getFlatSchema(),
      tree: this.schema.getSchemaTree(),
    };
  }

  public componentWillReceiveProps(nextProps) {
    this.schema = SchemaTree(nextProps.schema).getInstance();
    console.log('Done generating schema, ', this.schema.getSchemaTree());
    this.setState({
      flat: this.schema.getFlatSchema(),
      tree: this.schema.getSchemaTree(),
    });
  }

  public onChange = (
    validate,
    index: number,
    fieldId: IFieldIdentifier,
    onChangePayload: IOnChangePayload
  ) => {
    const { fieldIdToFocus, fieldIndex } = this.schema.onChange(fieldId, index, onChangePayload);
    const newFlat = this.schema
      .getFlatSchema()
      .map((row) => row.id)
      .join('##');
    const oldFlat = this.state.flat.map((row) => row.id).join('##');
    if (oldFlat !== newFlat) {
      this.setState({
        flat: this.schema.getFlatSchema(),
        tree: this.schema.getSchemaTree(),
      });
    }
    this.props.onChange({
      tree: this.schema.getSchemaTree(),
      flat: this.schema.getFlatSchema(),
      avroSchema: this.schema.getAvroSchema(),
    });
    if (typeof validate === 'function' && onChangePayload.value !== '') {
      validate(
        fieldIndex ? this.schema.getFlatSchema()[fieldIndex] : fieldId,
        this.schema.getSchemaTree()
      );
    }
    return { fieldIdToFocus };
  };
  public render() {
    const { flat } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <SchemaValidatorProvider>
          <div className={classes.schemaContainer}>
            <SchemaValidatorConsumer>
              {({ validate }) => (
                <FieldsList value={flat} onChange={this.onChange.bind(this, validate)} />
              )}
            </SchemaValidatorConsumer>
          </div>
        </SchemaValidatorProvider>
      </div>
    );
  }
}

const StyledDemo = withStyles(styles)(SchemaEditor);
export default function SchemaEditorWrapper(props) {
  return (
    <ThemeWrapper>
      <StyledDemo {...props} />
    </ThemeWrapper>
  );
}
