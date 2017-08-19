import * as React from 'react'
import {
  Button,
  Form,
  Table,
  Row,
  Col,
  Icon,
  Dropdown,
  Card,
  Checkbox
} from 'antd'
import * as update from 'immutability-helper'
import { AxiosPromise } from 'axios'
import { TableColumnConfig } from 'antd/lib/table/Table'
import SearchField, { ISearchFieldProps } from './SearchField'
import TableView from './TableView'

export type ValidateError = {
  [fieldName: string]: {
    errors: {
      message: string,
      field: string
    }[]
  }
}

export type SearchInfo = {
  values: any,
  page: number,
  pageSize: number
}

/** Your component's props */
export interface IDataTableProps {
  initialColumns: TableColumnConfig<any>[],
  /** handle form validate error */
  onValidateFailed?: (err: ValidateError) => void,
  onSearch (info: SearchInfo): AxiosPromise,
  /** reject handler */
  onError? (err): void,
}

/** Your component's state */
export interface IDataTableState {
  columns: TableColumnConfig<any>[],
  data: any[]
}

/** Your component */
export class DataTable extends React.Component<IDataTableProps, IDataTableState> {

  initialColumns = this.props.initialColumns

  state = {
    columns: [] = this.props.initialColumns,
    data: []
  }

  filterPannel = (<Card bodyStyle={{ padding: '1em' }}>
    {this.initialColumns.map(column => {
      const isSelected = this.state.columns.find(c => c.key === column.key) !== undefined
      const onChange = (e) => {
        if (e.target.checked) {
          this.showColumn(column.key)
        } else {
          this.hideColumn(column.key)
        }
      }
      return (
        <p key={column.key} style={{ marginTop: '.5em', marginBottom: '.5em' }}>
          <Checkbox defaultChecked={isSelected} onChange={onChange}>{column.title as any}</Checkbox>
        </p>
      )
    })}
  </Card>)

  tableTitle = (currentPageData) => {
    return <Row type='flex' justify='end'>
      <Col>
        <Dropdown overlay={this.filterPannel} trigger={['click']}>
          <Button>列表选项</Button>
        </Dropdown>
      </Col>
    </Row>
  }

  applyData = (data: any[]) => {
    this.setState({ data })
  }

  hideColumn = (key?: string) => {
    this.state.columns.forEach((column, i) => {
      if (column.key === key) {
        this.setState({
          columns: update(this.state.columns, { $splice: [[i, 1]] })
        })
      }
    })
  }

  showColumn = (key?: string) => {
    this.initialColumns.forEach((column, i) => {
      if (column.key === key) {
        this.setState({
          columns: update(this.state.columns, { $splice: [[i, 0, column]] })
        })
      }
    })
  }

  render () {
    return (
      <div>
        <div>
          <SearchField {...this.props} applyData={this.applyData}/>
        </div>
        <div>
          <TableView title={this.tableTitle} {...this.props} columns={this.state.columns} data={this.state.data} />
        </div>
      </div>
    )
  }
}

/** Export as default */
export default DataTable
