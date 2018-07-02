import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { message } from 'antd'
import axios from 'axios'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse } from '../src'
import { searchFields, columns, onSearch, onError } from './share'

storiesOf('DataTable', module)
  .addDecorator(withReadme(require('./enableListSelection.md')))
  .add('enableListSelection', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        name='test'
        enableListSelection
        rowKey={record => record.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        pageSize={10}
        onError={onError}
      />
    </div>
  ))
