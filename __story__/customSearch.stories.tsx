import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { message } from 'antd'
import axios from 'axios'

import {
  Button
} from 'antd'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse } from '../src'
import { searchFields, columns, onSearch, onError } from './share'

storiesOf('DataTable', module)
  .add('custom search', () => {

    let dataTableRef: DataTable | null = null

    const saveDataTableRef = (ref: DataTable) => {
      dataTableRef = ref
    }

    const onClickCustomSearch = () => {
      if (dataTableRef) {
        dataTableRef.fetch(1)
      }
    }

    return (
      <div style={{ padding: '1em' }}>
        <DataTable
          ref={saveDataTableRef}
          name='customSearch'
          rowKey={record => record.id}
          searchFields={searchFields}
          initialColumns={columns}
          onSearch={onSearch}
          pageSize={10}
          onError={onError}
        />
        <Button onClick={onClickCustomSearch}>Custom Search</Button>
      </div>
    )
  })
