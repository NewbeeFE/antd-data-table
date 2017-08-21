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
import { PaginationProps } from 'antd/lib/pagination/Pagination'

import { ValidationRule } from 'antd/lib/form/Form'
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

export type SearchFunc<T = void> = (page: number, values?: object) => Promise<T>

export type FieldRenderer = (payload?: object) => React.ReactNode

export type RendererType = 'input' | 'select'

export type SearchField = {
  label: string,
  name: string,
  type?: RendererType,
  renderer?: FieldRenderer,
  validationRule?: ValidationRule[],
  payload?: SearchFieldPayload
}

export type SearchFieldPayload = {
  /** props that pass to the main component */
  props?: object,
  [key: string]: any
}

/** Your component's props */
export interface IDataTableProps {
  initialColumns: TableColumnConfig<any>[],
  searchFields: SearchField[],
  /** 最大的表单项显示数，当表单项超过此数值时，会自动出现 collapse 按钮 */
  maxVisibleFieldCount?: number,
  pageSize?: number,
  /** handle form validate error */
  onValidateFailed?: (err: ValidateError) => void,
  /** 执行 search 动作，返回一个 AxiosPromis */
  onSearch (info: SearchInfo): AxiosPromise,
  /** reject handler */
  onError? (err): void,
}

/** Your component's state */
export interface IDataTableState {
  columns: TableColumnConfig<any>[],
  data: any[],
  page: number,
  currentValues: object,
  pagination: PaginationProps,
  tableLoading: boolean,
  searchButtonLoading: boolean
}

/** Your component */
export class DataTable extends React.Component<IDataTableProps, IDataTableState> {

  defaultProps = {
    pageSize: 10
  }

  initialColumns = this.props.initialColumns

  state = {
    columns: [] = this.props.initialColumns,
    data: [],
    page: 1,
    pagination: {} as PaginationProps,
    currentValues: {},
    tableLoading: false,
    searchButtonLoading: false
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

  startTableLoading = () => {
    this.setState({ tableLoading: true })
  }

  stopTableLoading = () => {
    this.setState({ tableLoading: false })
  }

  startSearchButtonLoading = () => {
    this.setState({ searchButtonLoading: true })
  }

  stopSearchButtonLoading = () => {
    this.setState({ searchButtonLoading: false })
  }

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

  applyValues = (values) => {
    this.setState({ currentValues: values })
  }

  handleChange = async (pagination: PaginationProps) => {
    const { onError } = this.props
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({ pagination: pager })
    this.fetch(pager.current || 1)
  }

  fetch: SearchFunc = async (page: number, values: object = this.state.currentValues) => {
    const { onError } = this.props
    try {
      this.startTableLoading()
      const pager = { ...this.state.pagination }
      const res = await this.props.onSearch({
        page: page,
        // pageSize 有 default
        pageSize: this.props.pageSize as number,
        values: this.state.currentValues
      })
      // TODO: 约定 total 字段
      pager.total = Number(res.headers['x-total-count'] as string)
      console.log(pager.total)
      this.setState({
        pagination: pager
      })
      // TODO: 约定 dataSource 字段
      this.applyData(res.data)
      this.applyValues(values)
    } catch (e) {
      onError && onError(e)
    } finally {
      this.stopTableLoading()
    }
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
          <SearchField {...this.props} fetch={this.fetch} />
        </div>
        <div>
          <TableView
            title={this.tableTitle}
            loading={this.state.tableLoading}
            {...this.props}
            columns={this.state.columns}
            data={this.state.data}
            fetch={this.fetch}
            onTableChange={this.handleChange}
            pagination={this.state.pagination}
          />
        </div>
      </div>
    )
  }
}

/** Export as default */
export default DataTable
