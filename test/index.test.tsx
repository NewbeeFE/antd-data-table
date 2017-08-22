import * as React from 'react'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'
import { DataTable, SearchField, SearchInfo } from '../src'
import { storiesOf } from '@storybook/react'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

/** Import component */

const onSearch = (info: SearchInfo) => {
  return axios.get('http://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: info.page,
      _limit: info.pageSize,
      ...info.values
    }
  })
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

describe('DataTable', () => {

  /** Snapshot testing */
  it('should render correctly', () => {
    let wrapper = shallow(<DataTable
      searchFields={searchFields}
      initialColumns={columns}
      onSearch={onSearch}
      pageSize={10}
    />)

    expect(wrapper).toMatchSnapshot()
  })

  /** Enzyme shallow testing */
  it('should have one div', () => {
    // let wrapper = shallow(<DataTable />)
    // expect(wrapper.find('div').length).toEqual(1)
  })
})
