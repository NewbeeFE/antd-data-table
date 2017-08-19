import * as React from 'react'
import {
  Input
} from 'antd'
import { SearchFieldPayload } from '../'

export = (payload?: SearchFieldPayload) => {
  return (
    <Input {...payload && payload.props} />
  )
}
