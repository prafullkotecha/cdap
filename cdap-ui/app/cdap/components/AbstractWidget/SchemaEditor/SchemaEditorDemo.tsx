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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import simpleSchema from 'components/AbstractWidget/SchemaEditor/data/simpleSchema';
import {
  complex1,
  complex2,
  complex3,
  complex4,
} from 'components/AbstractWidget/SchemaEditor/data/complexSchema';
import SchemaEditor from 'components/AbstractWidget/SchemaEditor';
import withStyles from '@material-ui/core/styles/withStyles';
import LoadingSVG from 'components/LoadingSVG';
import If from 'components/If';

const schemas = {
  simple1: simpleSchema,
  complex1,
  complex2,
  complex3,
  complex4,
};
const styles = () => {
  return {
    container: {
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: '99%',
      gridTemplateRows: '40px auto',
      padding: '10px',
    },
    contentContainer: {
      height: '600px',
      display: 'grid',
      gridTemplateColumns: '80%',
    },
  };
};

function SchemaEditorDemoBase({ classes }) {
  const [value, setValue] = React.useState('complex1');
  const [schema, setSchema] = React.useState(schemas.complex1);
  const [loading, setLoading] = React.useState(false);
  const handleChange = (event) => {
    const { value: radioValue } = event.target;
    setValue(radioValue);
    setSchema(schemas[radioValue]);
    setLoading(true);
  };

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [loading]);

  return (
    <div className={classes.container}>
      <FormControl component="fieldset" disabled={loading}>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
          {Object.keys(schemas).map((s, i) => {
            return (
              <FormControlLabel
                key={i}
                value={s}
                control={<Radio color="primary" />}
                label={s}
                labelPlacement="start"
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <div className={classes.contentContainer}>
        <If condition={loading}>
          <LoadingSVG />
        </If>
        <If condition={!loading}>
          <SchemaEditor
            schema={schema}
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

const SchemaEditorDemo = withStyles(styles)(SchemaEditorDemoBase);
export default React.memo(SchemaEditorDemo);
