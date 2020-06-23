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
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import isObject from 'lodash/isObject';
import withStyles from '@material-ui/core/styles/withStyles';
import { INDENTATION_SPACING } from 'components/AbstractWidget/SchemaEditor/SchemaConstants';
import makeStyles from '@material-ui/core/styles/makeStyles';
import If from 'components/If';

interface IFieldWrapperProps {
  ancestorsCount: number;
  children?: React.ReactNode;
  style?: any;
}

const rowHeight = 28;
const rowMarginTop = 2;
const widthOfSiblingLines = 2;

const CustomizedPaper = withStyles(() => {
  return {
    root: {
      padding: '2px 10px',
      display: 'grid',
      marginTop: `${rowMarginTop}px`,
      gridTemplateRows: `${rowHeight}px`,
      position: 'relative',
    },
  };
})(Paper);

const SiblingsWrapper = withStyles(() => {
  return {
    root: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
  };
})(Box);

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    height: `${rowHeight + rowMarginTop * 2 + 2}px`,
    width: `${widthOfSiblingLines}px`,
    background: 'rgba(0, 0, 0, 0.2)',
    left: (props) => (props as any).index * -1 * INDENTATION_SPACING,
  },
  innerMostSiblingConnector: {
    '&:after': {
      position: 'absolute',
      height: '2px',
      width: `${INDENTATION_SPACING - widthOfSiblingLines}px`,
      left: `${widthOfSiblingLines}px`,
      content: '""',
      background: 'rgba(0, 0, 0, 0.2)',
      top: `${rowHeight / 2}px`,
    },
  },
});

const FieldWrapperBase = ({ ancestorsCount = 0, children, style = {} }: IFieldWrapperProps) => {
  const spacing = ancestorsCount * INDENTATION_SPACING;
  const spacingMinusLeftMargin = spacing - 10;
  const firstColumn = `calc(100% - 75px)`;
  const secondColumn = `75px`;
  let customStyles = {
    marginLeft: `${spacing}px`,
    gridTemplateColumns: `${firstColumn} ${secondColumn}`,
    width: `calc(100% - ${spacingMinusLeftMargin}px)`,
    gridGap: '10px',
    alignItems: 'center',
  };
  if (style && isObject(style)) {
    customStyles = {
      ...customStyles,
      ...style,
    };
  }
  return (
    <CustomizedPaper elevation={2} style={customStyles}>
      <If condition={ancestorsCount > 1}>
        <SiblingsWrapper>
          {Array.from(Array(ancestorsCount - 1).keys()).map((index) => {
            const classes = useStyles({ index: ancestorsCount - 1 - index });
            if (index + 1 === ancestorsCount - 1) {
              return (
                <div
                  className={`${classes.root} ${classes.innerMostSiblingConnector}`}
                  key={index}
                />
              );
            }
            return <div className={classes.root} key={index} />;
          })}
        </SiblingsWrapper>
      </If>
      {children}
    </CustomizedPaper>
  );
};

const FieldInputWrapperBase = withStyles(() => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto 100px',
    },
  };
})(Box);

const FieldWrapper = React.memo(FieldWrapperBase);
const FieldInputWrapper = React.memo(FieldInputWrapperBase);
export { FieldWrapper, FieldInputWrapper };
