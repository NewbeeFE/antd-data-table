import * as React from 'react'
import withReadme from 'storybook-readme/with-readme'

import { storiesOf } from '@storybook/react'
import { message } from 'antd'
import axios from 'axios'

/** Import component */
import { DataTable, SearchField, SearchInfo, SearchResponse } from '../src'

import { searchFields, columns, onSearch, onError, plugins, actions } from './share'

storiesOf('DataTable', module)
  .addDecorator(withReadme(`Combines all features`))
  .add('overview', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        name='antd-demo-overview'
        title='Overview Table'
        enableListSelection
        maxVisibleFieldCount={4}
        plugins={plugins}
        rowActions={actions}
        rowKey={record => record.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
      />
    </div>
  ))
