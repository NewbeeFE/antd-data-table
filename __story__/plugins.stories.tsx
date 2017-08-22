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

import { searchFields, columns, onSearch, onError } from './share'

const plugins: Plugin[] = [
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
