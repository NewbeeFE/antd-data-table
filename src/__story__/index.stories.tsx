import * as React from 'react'
import { storiesOf } from '@storybook/react'

/** Import ant design less style */
import 'antd/dist/antd.less'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable } from '../'

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

storiesOf('DataTable', module)
  .add('basic', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        initialColumns={columns}
        onSearch={onSearch}
      />  
    </div>
  ))
