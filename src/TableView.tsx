import * as React from 'react'
import {
  Table
} from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { IDataTableProps } from './'

export interface ITableViewProps extends IDataTableProps {
  data: any[],
  columns: TableColumnConfig<any>[],
  title?: (currentPageData) => React.ReactNode
}

export interface ITableViewState {
  loading: boolean
}

class TableView extends React.Component<ITableViewProps, ITableViewState> {

  state = {
    loading: false
  }

  startLoading = () => {
    this.setState({ loading: true })
  }

  stopLoading = () => {
    this.setState({ loading: false })
  }

  render () {
    return (
      <Table
        title={this.props.title}
        loading={this.state.loading}
        columns={this.props.columns}
        dataSource={this.props.data}
      />
    )
  }
}

export default TableView
