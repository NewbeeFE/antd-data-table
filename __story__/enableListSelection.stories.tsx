import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { message } from 'antd'
import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse } from '../src'
import { searchFields, columns, onSearch, onError } from './share'

storiesOf('DataTable', module)
  .add('enableListSelection', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        name='test'
        enableListSelection
        rowKey={record => record.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        pageSize={10}
        onError={onError}
      />
    </div>
  ))
