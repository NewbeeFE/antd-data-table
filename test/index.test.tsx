import * as React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { DataTable } from '../src'

describe('DataTable', () => {

  /** Snapshot testing */
  it('should render correctly', () => {
    let tree = renderer.create(
      <DataTable />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  /** Enzyme shallow testing */
  it('should have one div', () => {
    let wrapper = shallow(<DataTable />)
    expect(wrapper.find('div').length).toEqual(1)
  })
})
