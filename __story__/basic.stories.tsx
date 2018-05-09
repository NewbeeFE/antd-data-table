import * as React from 'react'
import withReadme from 'storybook-readme/with-readme'

import { storiesOf } from '@storybook/react'
import { message } from 'antd'
import axios from 'axios'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse, TableColumnConfig } from '../src'

import { searchFields, columns, expands, onSearch, onError } from './share'

storiesOf('DataTable', module)
  .addDecorator(withReadme(require('./basic.md')))
  .add('basic', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        rowKey={record => record.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        loadDataImmediately={true}
        initialExpands={expands}
      />
    </div>
  ))
