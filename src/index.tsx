import * as React from 'react'
import {
  Button,
  Table,
  Row,
  Col,
  Icon,
  Dropdown,
  Card,
  Checkbox,
  Menu
} from 'antd'
import * as update from 'immutability-helper'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { PaginationProps } from 'antd/lib/pagination/Pagination'

import { ValidationRule } from 'antd/lib/form/Form'
import SearchField from './SearchField'

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

export type SearchFunc<T = void> = (page: number, values?: object, clearPagination?: boolean) => Promise<T>

export type SearchResponse<T> = {
  dataSource: T[],
  total: number
}

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

export type RowAction = {
  label: string,
  children?: RowAction[],
  action?: (record) => void
}

export type Plugin = {
  colSpan?: number,
  renderer: (selectedRowKeys: string[], selectedRows: any[], clearSelectionCallback: () => void) => React.ReactNode
}

/** Your component's props */
export interface IDataTableProps {
  initialColumns: TableColumnConfig<any>[],
  searchFields: SearchField[],
  rowActions?: RowAction[],
  plugins?: Plugin[],
  rowKey: (record: any) => string,
  title?: React.ReactNode,
  searchBtnText?: string,
  clearBtnText?: string,
  listSelectionBtnText?: string,
  /** 最大的表单项显示数，当表单项超过此数值时，会自动出现 collapse 按钮 */
  maxVisibleFieldCount?: number,
  pageSize?: number,
  /** handle form validate error */
  onValidateFailed?: (err: ValidateError) => void,
  /** 执行 search 动作，返回一个 AxiosPromis */
  onSearch<T> (info: SearchInfo): Promise<SearchResponse<T>>,
  /** reject handler */
  onError? (err): void
}

/** Your component's state */
export interface IDataTableState {
  columns: TableColumnConfig<any>[],
  data: any[],
  page: number,
  currentValues: object,
  pagination: PaginationProps,
  tableLoading: boolean,
  searchButtonLoading: boolean,
  selectedRowKeys: string[],
  selectedRows: any[]
}

const renderActions = (actions: RowAction[], record) => {
  return (
    <span>
      {actions.map((action, i) => {
        if (action.children) {
          const menu = (
            <Menu>
              {action.children.map(child => {
                const onClick = () => {
                  child.action && child.action(record)
                }
                return (
                  <Menu.Item>
                    <a onClick={onClick}>{child.label}</a>
                  </Menu.Item>
                )
              })}
            </Menu>
          )
          return (
            <Dropdown overlay={menu}>
              <a className='ant-dropdown-link'>
                {action.label} <Icon type='down' />
              </a>
            </Dropdown>
          )
        } else {
          const onClick = () => {
            action.action && action.action(record)
          }
          return [
            <a onClick={onClick}>{action.label}</a>,
            i === 0 && <span className='ant-divider' />
          ]
        }
      })}
    </span>
  )
}

/** Your component */
export class DataTable extends React.Component<IDataTableProps, IDataTableState> {

  static defaultProps = {
    pageSize: 10,
    searchBtnText: 'Search',
    clearBtnText: 'Clear',
    listSelectionBtnText: 'List selection'
  }

  actionsColumn = this.props.rowActions && { key: 'actions', title: 'Actions', render: (record) => { return renderActions(this.props.rowActions as RowAction[], record) } } as TableColumnConfig<any>

  initialColumns = this.actionsColumn ? [...this.props.initialColumns, this.actionsColumn] : this.props.initialColumns

  state = {
    columns: [] = this.initialColumns,
    data: [],
    page: 1,
    pagination: {} as PaginationProps,
    currentValues: {},
    tableLoading: false,
    searchButtonLoading: false,
    selectedRows: [],
    selectedRowKeys: []
  }

  filterPannel = (<Card bodyStyle={{ padding: '1em', width: '12em' }}>
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
    return (
      <Row type='flex'>
        <Col span={12}>
          {this.props.title}
        </Col>
        <Col span={12}>
          <Row type='flex' justify='end'>
            <Col>
              <Dropdown overlay={this.filterPannel} trigger={['click']}>
                <Button size='small'>{this.props.listSelectionBtnText}</Button>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  applyData = (data: any[]) => {
    this.setState({ data })
  }

  applyValues = (values, cb) => {
    this.setState({ currentValues: values }, cb)
  }

  clearPagination = () => {
    const pager = { ...this.state.pagination }
    pager.current = 1
    this.setState({ pagination: pager })
  }

  handleChange = (pagination: PaginationProps) => {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({ pagination: pager })
    this.fetch(pager.current || 1) // tslint:disable-line
  }

  fetch: SearchFunc = async (page: number, values: object = this.state.currentValues, clearPagination: boolean = false) => {
    const { onError } = this.props
    this.applyValues(values, async () => {
      try {
        // 这里先简单认为 clearPagination 为 true 就是从 Search button 触发的 fetch
        clearPagination && this.startSearchButtonLoading()
        this.startTableLoading()
        const pager = { ...this.state.pagination }
        const response = await this.props.onSearch({
          page: page,
          // pageSize 有 default
          pageSize: this.props.pageSize as number,
          values: this.state.currentValues
        })
        pager.total = response.total
        this.setState({
          pagination: pager
        })
        this.applyData(response.dataSource)
        clearPagination && this.clearPagination()
      } catch (e) {
        onError && onError(e)
      } finally {
        clearPagination && this.stopSearchButtonLoading()
        this.stopTableLoading()
      }
    })
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

  clearSelection = () => {
    this.setState({
      selectedRows: [],
      selectedRowKeys: []
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
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys, selectedRows
        })
      }
    }

    return (
      <div>
        <div>
          <SearchField {...this.props} fetch={this.fetch} btnLoading={this.state.searchButtonLoading} />
        </div>
        <div>
          {this.props.plugins && <Row className='operationpannel' gutter={16} type='flex' style={{ paddingBottom: '1em' }}>
            {(this.props.plugins).map(plugin => {
              return (
                <Col span={plugin.colSpan}>
                  {plugin.renderer(this.state.selectedRowKeys, this.state.selectedRows, this.clearSelection)}
                </Col>
              )
            })}
          </Row>}
          <Row>
            <Table
              bordered
              size='middle'
              title={this.tableTitle}
              rowSelection={rowSelection}
              rowKey={this.props.rowKey}
              loading={this.state.tableLoading}
              columns={this.state.columns}
              dataSource={this.state.data}
              onChange={this.handleChange}
              pagination={this.state.pagination}
            />
          </Row>
        </div>
      </div>
    )
  }
}

/** Export as default */
export default DataTable
