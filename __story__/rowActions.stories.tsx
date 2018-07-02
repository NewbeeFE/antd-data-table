import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import withReadme from 'storybook-readme/with-readme'

import axios from 'axios'

/** Import component */
import { DataTable, SearchField, SearchInfo, RowAction } from '../src'

import { searchFields, columns, onSearch, onError } from './share'

const actions: RowAction[] = [
  {
    label: 'Edit',
    action (record) {
      action('onClick edit')(record)
    }
  },
  {
    label: 'More',
    children: [
      {
        label: 'Remove',
        action (record) {
          action('onClick remove')(record)
        }
      },
      {
        label: 'Open',
        action (record) {
          action('onClick open')(record)
        }
      }
    ]
  }
]

storiesOf('DataTable', module)
  .addDecorator(withReadme(require('./rowActions.md')))
  .add('rowActions', () => (
    <div style={{ padding: '1em' }}>
      <DataTable
        rowKey={record => record.id}
        searchFields={searchFields}
        initialColumns={columns}
        onSearch={onSearch}
        pageSize={10}
        rowActions={actions}
      />
    </div>
  ))
