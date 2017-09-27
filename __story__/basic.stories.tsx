import * as React from 'react'
import withReadme from 'storybook-readme/with-readme'

import { storiesOf } from '@storybook/react'
import { message } from 'antd'
import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse } from '../src'

import { searchFields, columns, onSearch, onError } from './share'

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
      />
    </div>
  ))
