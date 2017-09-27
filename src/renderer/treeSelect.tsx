import * as React from 'react'

import {
  TreeSelect
} from 'antd'
import { SearchFieldPayload } from '../'

export default (payload?: SearchFieldPayload) => {
  return (
    <TreeSelect {...payload && payload.props} />
  )
}
