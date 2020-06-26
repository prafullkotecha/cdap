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
import PropTypes from 'prop-types';
import PreviewDataFetcher from 'components/LogViewer/DataFetcher/PreviewDataFetcher';
import LogViewer from 'components/LogViewer';
import ThemeWrapper from 'components/ThemeWrapper';

interface IPreviewLogs {
  namespace: string;
  previewId: string;
}

const PreviewLogsWrapper: React.FC<IPreviewLogs> = ({ namespace, previewId }) => {
  const [dataFetcher] = React.useState(
    new PreviewDataFetcher({
      namespace,
      previewId,
    })
  );

  return <LogViewer dataFetcher={dataFetcher} />;
};

function PreviewLogs(props) {
  return (
    <ThemeWrapper>
      <PreviewLogsWrapper {...props} />
    </ThemeWrapper>
  );
}

(PreviewLogs as any).propTypes = {
  namespace: PropTypes.string,
  previewId: PropTypes.string,
};

export default PreviewLogs;
