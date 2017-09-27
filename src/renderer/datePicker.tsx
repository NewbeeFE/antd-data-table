import * as React from 'react'

import {
  DatePicker
} from 'antd'
import { SearchFieldPayload } from '../'

export default (payload?: SearchFieldPayload) => {
  return (
    <DatePicker {...payload && payload.props} />
  )
}
