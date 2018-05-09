import * as React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { action } from '@storybook/addon-actions'
import {
  Button
} from 'antd'

import axios from 'axios'

/** Import component */
import { DataTable, SearchField, SearchInfo, Plugin, TableColumnConfig } from '../src'

import { searchFields, columns, onSearch, onError, plugins } from './share'

storiesOf('DataTable', module)
  .addDecorator(withReadme(require('./plugins.md')))
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
