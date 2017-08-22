import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Button
} from 'antd'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */
import { DataTable, SearchField, SearchInfo, Plugin } from '../src'

const onSearch = async (info: SearchInfo) => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: info.page,
      _limit: info.pageSize,
      ...info.values
    }
  })
  return {
    dataSource: res.data,
    total: res.headers['x-total-count']
  }
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
    type: 'input',
    payload: {
      props: {
        placeholder: 'placeholder'
      }
    }
  },
  {
    label: 'Select',
    name: 'select',
    type: 'select',
    payload: {
      props: {
        allowClear: true
      },
      options: [
        { key: '1', label: 'one', value: '1' },
        { key: '2', label: 'two', value: '2' },
        { key: '3', label: 'three', value: '3' }
      ]
    }
  },
  {
    label: 'Multi Select',
    name: 'multi-select',
    type: 'select',
    payload: {
      props: {
        mode: 'multiple'
      },
      options: [
        { key: '1', label: 'one', value: '1' },
        { key: '2', label: 'two', value: '2' },
        { key: '3', label: 'three', value: '3' }
      ]
    }
  }
]

const plugins: Plugin[] = [
  {
    renderer (selectedRowKeys, selectedRows, clearSelectionCallback) {
      const onClick = () => {
        action('onClick test plugin')(selectedRowKeys)
        clearSelectionCallback()
      }
      return (
        <Button onClick={onClick}>Test</Button>
      )
    }
  },
  {
    renderer (selectedRowKeys, selectedRows, clearSelectionCallback) {
      const onClick = () => {
        action('onClick test plugin')(selectedRowKeys)
        clearSelectionCallback()
      }
      return (
        <Button onClick={onClick}>Test</Button>
      )
    }
  }
]

storiesOf('DataTable', module)
  .add('plugins', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        rowKey={record => record.id}
        searchFields={searchFields}
        plugins={plugins}
        initialColumns={columns}
        onSearch={onSearch}
        pageSize={10}
      />
    </div>
  ))
