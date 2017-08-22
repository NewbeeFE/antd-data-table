import { message } from 'antd'
import axios from 'axios'
import { SearchInfo, SearchField } from '../src/index'
import { TableColumnConfig } from 'antd/lib/table/Table'

export const onSearch = async (info: SearchInfo) => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/posts', {
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
  }
]
