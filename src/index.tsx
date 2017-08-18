import * as React from 'react'
import {
  Button,
  Form,
  Table,
  Row,
  Col,
  Icon
} from 'antd'
import SearchField, { ISearchFieldProps } from './SearchField'
/** Your component's props */
export interface IDataTableProps extends ISearchFieldProps {
}

/** Your component's state */
export interface IDataTableState {
}

/** Your component */
export class DataTable extends React.Component<IDataTableProps, IDataTableState> {

  render () {
    return (
      <div>
        <SearchField {...this.props} />
        <div>

        </div>
      </div>
    )
  }
}

/** Export as default */
export default DataTable
