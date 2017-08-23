import * as React from 'react'
import { message, Button } from 'antd'
import axios from 'axios'
import { action } from '@storybook/addon-actions'
import { SearchInfo, SearchField, Plugin, RowAction } from '../src/index'
import { TableColumnConfig } from 'antd/lib/table/Table'

export const onSearch = async (info: SearchInfo) => {
  const res = await axios.get('//jsonplaceholder.typicode.com/posts', {
    params: {
      _page: info.page,
      _limit: info.pageSize,
      ...info.values
    }
  })
  return {
    dataSource: res.data,
    total: Number(res.headers['x-total-count'])
  }
}

export const onError = (e) => {
  message.error(e.message)
}

export const columns: TableColumnConfig<any>[] = [
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

export const searchFields: SearchField[] = [
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
  },
  {
    label: 'Foo',
    name: 'foo',
    type: 'input'
  },
  {
    label: 'Bar',
    name: 'bar',
    type: 'input'
  }
]

export const plugins: Plugin[] = [
  {
    renderer (selectedRowKeys, selectedRows, clearSelectionCallback) {
      const onClick = () => {
        action('onClick test plugin')(selectedRowKeys)
        clearSelectionCallback()
      }
      return (
        <Button onClick={onClick}>Plugin A</Button>
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
        <Button onClick={onClick}>Plugin 2</Button>
      )
    }
  }
]

export const actions: RowAction[] = [
  {
    label: 'Edit',
    action (record) {
      action('onClick edit')(record)
    }
  },
  {
    label: 'More',
    children: [
      {
        label: 'Remove',
        action (record) {
          action('onClick remove')(record)
        }
      },
      {
        label: 'Open',
        action (record) {
          action('onClick open')(record)
        }
      }
    ]
  }
]
