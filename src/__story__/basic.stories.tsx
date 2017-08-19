import * as React from 'react'
import { storiesOf } from '@storybook/react'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable, SearchField } from '../'

const onSearch = (values) => {
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

const columns: TableColumnConfig<any>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id'
  }, {
    key: 'title',
    title: 'Title',
    dataIndex: 'title'
  }
]

const searchFields: SearchField[] = [
  {
    label: 'ID',
    name: 'id',
    type: 'input'
  }
]

storiesOf('DataTable', module)
  .add('basic', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
      />
    </div>
  ))
