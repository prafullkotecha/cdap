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
const SiblingCommunicationContext = React.createContext(null);
const SiblingCommunicationConsumer = SiblingCommunicationContext.Consumer;

class SiblingCommunicationProvider extends React.Component {
  public setActiveParent = (id) => {
    this.setState({
      activeParent: id,
    });
  };
  public state = {
    activeParent: null,
    setActiveParent: this.setActiveParent.bind(this),
  };

  public render() {
    return (
      <SiblingCommunicationContext.Provider value={this.state}>
        {this.props.children}
      </SiblingCommunicationContext.Provider>
    );
  }
}

export { SiblingCommunicationProvider, SiblingCommunicationConsumer };
