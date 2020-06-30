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
import FormControl from '@material-ui/core/FormControl';
import SchemaEditor from 'components/AbstractWidget/SchemaEditor';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import LoadingSVGCentered from 'components/LoadingSVGCentered';
import If from 'components/If';
import FileDnD from 'components/FileDnD';

const defaultSchema = require('./data/schema2.json');

const styles = () => {
  return {
    container: {
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      padding: '10px',
    },
    contentContainer: {
      height: '100%',
      display: 'grid',
    },
  };
};

interface ISchemaEditorDemoBaseProps extends WithStyles<typeof styles> {}

class SchemaEditorDemoBase extends React.Component<ISchemaEditorDemoBaseProps> {
  public state = {
    loading: false,
    file: {},
    error: null,
    schema: defaultSchema,
  };
  public onDropHandler = (e) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        this.setState({
          schema: JSON.parse(evt.target.result as any),
          file: e[0],
          error: null,
        });
      } catch (e) {
        this.setState({ error: e.message });
      }
    };
    reader.readAsText(e[0], 'UTF-8');
  };
  public render() {
    console.log('rendering demo');
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <FormControl component="fieldset" disabled={this.state.loading}>
          <FileDnD
            onDropHandler={this.onDropHandler}
            file={this.state.file}
            error={this.state.error}
          />
        </FormControl>
        <div className={classes.contentContainer}>
          <If condition={this.state.loading}>
            <LoadingSVGCentered />
          </If>
          <If condition={!this.state.loading}>
            <SchemaEditor
              schema={this.state.schema}
              onChange={({ tree: t, flat: f, avroSchema }) => {
                // tslint:disable-next-line: no-console
                console.log(t, f, avroSchema);
              }}
            />
          </If>
        </div>
      </div>
    );
  }
}
const SchemaEditorDemo = withStyles(styles)(SchemaEditorDemoBase);
export default React.memo(SchemaEditorDemo);
