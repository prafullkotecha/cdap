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

import Button from '@material-ui/core/Button';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import If from 'components/If';
import { useAppInternalState } from 'components/PluginJSONCreator/Create';
import { STEPS } from 'components/PluginJSONCreator/Create/Content';
import * as React from 'react';

const styles = (theme): StyleRules => {
  return {
    root: {
      marginTop: '50px',
      borderTop: `1px solid ${theme.palette.grey[300]}`,
      paddingTop: '25px',
      '& button': {
        marginRight: '50px',
      },
    },
  };
};

interface IStepButtonProps extends WithStyles<typeof styles> {
  nextDisabled?: boolean;
  onNext?: () => void;
  onComplete?: () => void;
  onPrevious?: () => void;
  completeLoading?: boolean;
}

const StepButtonsView: React.FC<IStepButtonProps> = ({
  nextDisabled,
  onNext,
  onPrevious,
  classes,
  onComplete,
}) => {
  const { activeStep, setActiveStep } = useAppInternalState();
  function handlePreviousClick() {
    if (activeStep === 0) {
      return;
    }

    if (typeof onNext === 'function') {
      onPrevious();
    }

    setActiveStep(activeStep - 1);
  }

  function handleNextClick() {
    if (activeStep === STEPS.length - 1) {
      return;
    }

    if (typeof onNext === 'function') {
      onNext();
    }

    setActiveStep(activeStep + 1);
  }

  return (
    <div className={classes.root}>
      <If condition={activeStep > 0}>
        <Button color="primary" onClick={handlePreviousClick} data-cy="previous-step-button">
          Previous
        </Button>
      </If>
      <If condition={typeof onComplete !== 'function'}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          disabled={nextDisabled}
          data-cy="next-step-button"
        >
          Next
        </Button>
      </If>
    </div>
  );
};

const StepButtons = withStyles(styles)(StepButtonsView);
export default StepButtons;
