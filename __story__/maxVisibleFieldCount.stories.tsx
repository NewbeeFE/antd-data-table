import * as React from 'react'
import { storiesOf } from '@storybook/react'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable, SearchField, SearchInfo } from '../src'

import { searchFields, columns, onSearch, onError } from './share'

storiesOf('DataTable', module)
  .add('maxVisibleFieldCount', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        rowKey={record => record.id}
        pageSize={10}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        maxVisibleFieldCount={3}
      />
    </div>
  ))
