import * as React from 'react'
import { message, Button } from 'antd'
import axios from 'axios'
import { action } from '@storybook/addon-actions'
import { SearchInfo, SearchField, Plugin, RowAction, Expand } from '../src/index'
import { TableColumnConfig } from 'antd/lib/table/Table'

export const onSearch = async (info: SearchInfo) => {
  const params = {
    _page: info.page,
    _limit: info.pageSize,
    ...info.values
  }
  const res = await axios.get('//jsonplaceholder.typicode.com/posts', {
    params
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

export const expands: Expand[] = [
  {
    title: 'Body',
    dataIndex: 'body',
    render (value, record) {
      return value && `${value.substr(0, 100)} ...`
    }
  },
  {
    title: 'User ID',
    dataIndex: 'userId'
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
    initialValue: '1',
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
    span: 12,
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
    label: 'Date Picker',
    name: 'datePicker',
    type: 'datePicker',
    payload: {

    }
  },
  {
    label: 'Tree Select',
    name: 'treeselect',
    type: 'treeSelect',
    payload: {
      props: {
        treeData: [{
          label: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [{
            label: 'Child Node1',
            value: '0-0-1',
            key: '0-0-1'
          }, {
            label: 'Child Node2',
            value: '0-0-2',
            key: '0-0-2'
          }]
        }, {
          label: 'Node2',
          value: '0-1',
          key: '0-1'
        }]
      }
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
    renderer(selectedRowKeys, selectedRows, clearSelectionCallback) {
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
    renderer(selectedRowKeys, selectedRows, clearSelectionCallback) {
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
    action(record) {
      action('onClick edit')(record)
    }
  },
  {
    label: 'More',
    children: [
      {
        label: 'Remove',
        action(record) {
          action('onClick remove')(record)
        }
      },
      {
        label: 'Open',
        action(record) {
          action('onClick open')(record)
        }
      }
    ]
  }
]
