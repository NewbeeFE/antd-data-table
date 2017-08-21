import * as React from 'react'
import {
  Table
} from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { PaginationProps } from 'antd/lib/pagination/Pagination'
import { IDataTableProps, SearchInfo, SearchFunc } from './'

export interface ITableViewProps extends IDataTableProps {
  data: any[],
  columns: TableColumnConfig<any>[],
  pagination: PaginationProps,
  loading: boolean,
  title?: (currentPageData) => React.ReactNode,
  onTableChange: (pagination: PaginationProps | boolean, filters: string[], sorter: Object) => any,
  fetch: SearchFunc
}

export interface ITableViewState {
}

class TableView extends React.Component<ITableViewProps, ITableViewState> {

  render () {
    return (
      <Table
        title={this.props.title}
        loading={this.props.loading}
        columns={this.props.columns}
        dataSource={this.props.data}
        onChange={this.props.onTableChange}
        pagination={this.props.pagination}
      />
    )
  }
}

export default TableView
