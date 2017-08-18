import * as React from 'react'
import { storiesOf } from '@storybook/react'

/** Import ant design less style */
import 'antd/dist/antd.less'

import axios from 'axios'

/** Import component */
import { DataTable } from '../'

const onSearch = (values) => {
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}

storiesOf('DataTable', module)
  .add('basic', () => (
    <DataTable
      onSearch={onSearch}
    />
  ))
