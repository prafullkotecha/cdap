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
import TextboxOnValium from 'components/TextboxOnValium';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { IFieldTypeBaseProps } from 'components/AbstractWidget/SchemaEditor/EditorTypes';

const styles = (theme) => {
  return {
    root: {
      border: 0,
    },
  };
};

interface IFieldTypeBase1Props extends IFieldTypeBaseProps, WithStyles<typeof styles> {}

class FieldTypeBase extends React.Component<IFieldTypeBase1Props> {
  public state = {
    fieldName: this.props.name,
    fieldType: this.props.type,
    nullable: false,
  };
  public onChangeHandler = (fieldName) => {
    this.setState({ fieldName });
    this.props.onChange('name', fieldName);
  };

  public render() {
    const { classes } = this.props;
    return (
      <div>
        <TextboxOnValium
          // className={classes.root}
          value={this.state.fieldName}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}

const FieldType = withStyles(styles)(FieldTypeBase);
export { FieldType };
