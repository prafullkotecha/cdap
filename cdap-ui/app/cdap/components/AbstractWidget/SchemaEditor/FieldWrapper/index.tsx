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
import { SiblingCommunicationConsumer } from 'components/AbstractWidget/SchemaEditor/FieldWrapper/SiblingCommunicationContext';
import { blue, red } from 'components/ThemeWrapper/colors';
import classnames from 'classnames';
import { SchemaValidatorConsumer } from '../SchemaValidator';
import isNil from 'lodash/isNil';

interface IFieldWrapperProps {
  ancestors: string[];
  children?: React.ReactNode;
  style?: any;
  className?: any;
}

const rowHeight = 28;
const rowMarginTop = 2;
const widthOfSiblingLines = 10;
const borderSizeOfSiblingLines = 2;

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
    borderLeft: `${borderSizeOfSiblingLines}px solid rgba(0, 0, 0, 0.2)`,
    left: (props) => (props as any).index * -1 * INDENTATION_SPACING,
  },
  innerMostSiblingConnector: {
    '&:after': {
      position: 'absolute',
      height: '2px',
      width: `${INDENTATION_SPACING - borderSizeOfSiblingLines}px`,
      left: '0px',
      content: '""',
      borderTop: '2px solid rgba(0, 0, 0, 0.2)',
      top: `${rowHeight / 2}px`,
    },
  },
  highlight: {
    borderLeftColor: `${blue[300]}`,
    '&:after': {
      borderTopColor: `${blue[300]}`,
    },
  },
  errorHighlight: {
    borderLeftColor: `${red[100]}`,
    '&:after': {
      borderTopColor: `${red[100]}`,
    },
  },
});

const SiblingLine = ({ id, index, activeParent, setActiveParent, ancestors, error = false }) => {
  const classes = useStyles({ index: ancestors.length - 1 - index });
  if (index + 1 === ancestors.length - 1) {
    return (
      <div
        onMouseEnter={() => setActiveParent(id)}
        onMouseLeave={() => setActiveParent(null)}
        className={classnames(`${classes.root} ${classes.innerMostSiblingConnector}`, {
          [classes.highlight]: id === activeParent,
          [classes.errorHighlight]: error,
        })}
        key={id}
        data-ancestor-id={id}
      />
    );
  }
  return (
    <div
      onMouseEnter={() => setActiveParent(id)}
      onMouseLeave={() => setActiveParent(null)}
      className={classnames(classes.root, {
        [classes.highlight]: id === activeParent,
        [classes.errorHighlight]: error,
      })}
      data-ancestor-id={id}
      key={index}
    />
  );
};

const FieldWrapperBase = ({
  ancestors = [],
  children,
  style = {},
  className,
}: IFieldWrapperProps) => {
  const spacing = ancestors.length * INDENTATION_SPACING;
  const firstColumn = `calc(100% - 75px)`;
  const secondColumn = `75px`;
  let customStyles = {
    marginLeft: `${spacing}px`,
    gridTemplateColumns: `${firstColumn} ${secondColumn}`,
    width: `calc(100% - ${spacing + 5 /* box shadow */}px)`,
    alignItems: 'center',
  };
  if (style && isObject(style)) {
    customStyles = {
      ...customStyles,
      ...style,
    };
  }
  return (
    <CustomizedPaper elevation={2} style={customStyles} className={className}>
      <If condition={ancestors.length > 1}>
        <SchemaValidatorConsumer>
          {({ errorMap }) => {
            return (
              <SiblingCommunicationConsumer>
                {({ activeParent, setActiveParent }) => {
                  return (
                    <SiblingsWrapper>
                      {ancestors.slice(1).map((id, index) => {
                        return (
                          <SiblingLine
                            key={id}
                            id={id}
                            activeParent={activeParent}
                            setActiveParent={setActiveParent}
                            ancestors={ancestors}
                            index={index}
                            error={!isNil(errorMap[id])}
                          />
                        );
                      })}
                    </SiblingsWrapper>
                  );
                }}
              </SiblingCommunicationConsumer>
            );
          }}
        </SchemaValidatorConsumer>
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
