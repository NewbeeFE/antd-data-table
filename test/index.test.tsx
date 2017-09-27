import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'
import { DataTable, SearchField, SearchInfo } from '../src'
import { storiesOf } from '@storybook/react'
import { searchFields, columns, onSearch } from '../__story__/share'

import axios from 'axios'

import { TableColumnConfig } from 'antd/lib/table/Table'

describe('DataTable', () => {

  /** Snapshot testing */
  it('should render correctly', () => {
    let tree = renderer.create(
      <DataTable
        rowKey={item => item.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        pageSize={10}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  /** Enzyme shallow testing */
  it('should have one div', () => {
    // let wrapper = shallow(<DataTable />)
    // expect(wrapper.find('div').length).toEqual(1)
  })
})
