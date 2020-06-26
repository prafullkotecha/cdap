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
import { FieldRow } from 'components/AbstractWidget/SchemaEditor/FieldsList/FieldRow';
import { SiblingCommunicationProvider } from 'components/AbstractWidget/SchemaEditor/FieldWrapper/SiblingCommunicationContext';
import VirtualScroll from 'components/VirtualScroll';

interface IFieldsListState {
  rows: IFlattenRowType[];
  currentRowToFocus: string;
}

interface IFieldsListProps {
  value: IFlattenRowType[];
  onChange: (
    index: number,
    id: IFieldIdentifier,
    onChangePayload: IOnChangePayload
  ) => number | void;
}

export class FieldsList extends React.Component<IFieldsListProps, IFieldsListState> {
  public static visibleNodeCount = 20;
  public static childrenUnderFold = 10;
  public static heightOfRow = 32;

  public state: IFieldsListState = {
    rows: this.props.value || [],
    currentRowToFocus: null,
  };
  public componentWillReceiveProps(nextProps: IFieldsListProps) {
    const ids = nextProps.value.map((r) => r.id).join(',');
    const existingids = this.state.rows.map((r) => r.id).join(',');
    if (ids !== existingids) {
      this.setState({
        rows: nextProps.value,
      });
    }
  }

  public onChange = (index: number, field: IFieldIdentifier, onChangePayload: IOnChangePayload) => {
    const updatedIndex = this.props.onChange(index, field, onChangePayload);
    if (typeof updatedIndex === 'string') {
      this.setState({
        currentRowToFocus: updatedIndex,
      });
    }
  };

  public renderList = (visibleNodeCount, startNode) => {
    console.log('calling : ');
    return this.state.rows
      .slice(1)
      .slice(startNode, startNode + visibleNodeCount)
      .map((field, i) => {
        return (
          <FieldRow
            autoFocus={this.state.currentRowToFocus === field.id}
            key={field.id}
            field={field}
            onChange={this.onChange.bind(null, i + 1)}
          />
        );
      });
  };

  public render1() {
    return (
      <SiblingCommunicationProvider>
        {this.state.rows.map((field, i) => (
          <FieldRow
            autoFocus={this.state.currentRowToFocus === field.id}
            key={field.id}
            field={field}
            onChange={this.onChange.bind(null, i)}
          />
        ))}
      </SiblingCommunicationProvider>
    );
  }
  public render() {
    return (
      <SiblingCommunicationProvider>
        <VirtualScroll
          itemCount={() => this.state.rows.length + 2}
          visibleChildCount={FieldsList.visibleNodeCount}
          childHeight={FieldsList.heightOfRow}
          renderList={this.renderList.bind(this)}
          childrenUnderFold={FieldsList.childrenUnderFold}
        />
      </SiblingCommunicationProvider>
    );
  }
}
