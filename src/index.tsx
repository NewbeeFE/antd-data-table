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
  Menu,
  Affix
} from 'antd'
import * as update from 'immutability-helper'
import { TableColumnConfig, TableRowSelection } from 'antd/lib/table/Table'
import { ColumnProps } from 'antd/lib/table/Column' // tslint:disable-line
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

export type RendererType = 'input' | 'select' | 'datePicker' | 'treeSelect'

export type SearchField = {
  /** 条件名称 */
  label: string,
  /** 条件别名，会作为 onSearch 时 values 的 key 名 */
  name: string,
  /** 渲染的组件类型 */
  type?: RendererType,
  /** 当不使用自带的组件类型时，可以自己写 renderer */
  renderer?: FieldRenderer,
  /** antd 的表单验证规则 */
  validationRule?: ValidationRule[],
  /** 初始值 */
  initialValue?: any,
  /** 表单项的 span 值, 默认 6 */
  span?: number,
  /** 传给渲染的组件的参数 */
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
  name?: string,
  initialColumns: TableColumnConfig<any>[],
  searchFields: SearchField[],
  rowActions?: RowAction[],
  enableListSelection?: boolean,
  plugins?: Plugin[],
  /** 表格行 key 的取值 */
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
  /** 页面加载完成后是否立即加载数据 */
  loadDataImmediately?: boolean,
  /** 执行 search 动作，返回一个 AxiosPromis */
  onSearch<T> (info: SearchInfo): Promise<SearchResponse<T>>,
  /** reject handler */
  onError? (err): void,
  rowSelection?: TableRowSelection<any>,
  affixTarget?: () => HTMLElement,
  affixOffsetTop?: number,
  affixOffsetBottom?: number
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

  static storageKey = 'antd-data-table'

  static defaultProps = {
    pageSize: 10,
    searchBtnText: 'Search',
    clearBtnText: 'Clear',
    listSelectionBtnText: 'List selection'
  }

  readonly actionsColumn = this.props.rowActions && { key: 'actions', title: 'Actions', render: (record) => { return renderActions(this.props.rowActions as RowAction[], record) } } as TableColumnConfig<any>

  readonly shouldShowTableTitle = this.props.title || this.props.enableListSelection

  readonly initialColumns = this.actionsColumn ? [...this.props.initialColumns, this.actionsColumn] : this.props.initialColumns

  readonly visibleColumnKeys = localStorage.getItem(`${DataTable.storageKey}-${this.props.name}-columnIds`)

  readonly visibleColumns = (this.props.enableListSelection === true) && this.visibleColumnKeys ? this.initialColumns.filter(column => (this.visibleColumnKeys as string).indexOf(column.key as string) !== -1) : this.initialColumns

  state = {
    columns: [] = this.visibleColumns,
    data: [],
    page: 1,
    pagination: {
      pageSize: this.props.pageSize
    } as PaginationProps,
    currentValues: {},
    tableLoading: false,
    searchButtonLoading: false,
    selectedRows: [],
    selectedRowKeys: []
  }

  private filterPannel = (<Card bodyStyle={{ padding: '1em', width: '12em' }}>
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

  constructor(props) {
    super(props)

    if (this.props.enableListSelection && !this.props.name) {
      console.warn('`name` is required while `enableListSelection` is true!')
    }
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

  private saveVisibleColumnKeysToStorage = (columns: TableColumnConfig<any>[]) => {
    localStorage.setItem(`${DataTable.storageKey}-${this.props.name}-columnIds`, columns.map(column => column.key).join(','))
  }

  private applyData = (data: any[]) => {
    this.setState({ data })
  }

  private applyValues = (values, cb) => {
    this.setState({ currentValues: values }, cb)
  }

  private clearPagination = () => {
    const pager = { ...this.state.pagination }
    pager.current = 1
    this.setState({ pagination: pager })
  }

  private handleChange = (pagination: PaginationProps) => {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({ pagination: pager })
    this.fetch(pager.current || 1) // tslint:disable-line
  }

  private hideColumn = (key?: string) => {
    this.state.columns.forEach((column, i) => {
      if (column.key === key) {
        const columns = update(this.state.columns, { $splice: [[i, 1]] })
        this.setState({
          columns
        }, () => this.saveVisibleColumnKeysToStorage(columns))
      }
    })
  }

  private clearSelection = () => {
    this.setState({
      selectedRows: [],
      selectedRowKeys: []
    })
  }

  private showColumn = (key?: string) => {
    this.initialColumns.forEach((column, i) => {
      if (column.key === key) {
        const columns = update(this.state.columns, { $splice: [[i, 0, column]] })
        this.setState({
          columns
        }, () => this.saveVisibleColumnKeysToStorage(columns))
      }
    })
  }

  private startTableLoading = () => {
    this.setState({ tableLoading: true })
  }

  private stopTableLoading = () => {
    this.setState({ tableLoading: false })
  }

  private startSearchButtonLoading = () => {
    this.setState({ searchButtonLoading: true })
  }

  private stopSearchButtonLoading = () => {
    this.setState({ searchButtonLoading: false })
  }

  private tableTitle = (currentPageData) => {
    if (this.shouldShowTableTitle) {
      return (
        <Row type='flex'>
          <Col span={12}>
            {this.props.title}
          </Col>
          <Col span={12}>
            <Row type='flex' justify='end'>
              <Col>
                {this.props.enableListSelection && (
                  <Dropdown overlay={this.filterPannel} trigger={['click']}>
                    <Button size='small'>{this.props.listSelectionBtnText}</Button>
                  </Dropdown>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )
    }
  }

  render () {
    const rowSelection = Object.assign({}, {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys, selectedRows
        })
      }
    }, this.props.rowSelection)

    const ActionPanel = this.props.plugins && (
      <Row className='operationpannel' gutter={16} type='flex' style={{ paddingBottom: '1em' }}>
        {(this.props.plugins).map(plugin => {
          return (
            <Col span={plugin.colSpan}>
              {plugin.renderer(this.state.selectedRowKeys, this.state.selectedRows, this.clearSelection)}
            </Col>
          )
        })}
      </Row>
    )

    return (
      <div>
        <div>
          <SearchField {...this.props} fetch={this.fetch} btnLoading={this.state.searchButtonLoading} />
        </div>
        <div>
          {this.props.affixTarget ? (
            <Affix
              target={this.props.affixTarget}
              offsetBottom={this.props.affixOffsetBottom}
              offsetTop={this.props.affixOffsetTop}
            >
              {ActionPanel}
            </Affix>
          ) : ActionPanel}
          <Row>
            <Table
              bordered
              size='middle'
              {...this.shouldShowTableTitle && { title: this.tableTitle }}
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
