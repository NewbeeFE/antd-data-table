import * as React from 'react'
import {
  Button,
  Form,
  Table,
  Row,
  Col,
  Icon,
  Input
} from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { IDataTableProps, SearchInfo, SearchFunc } from './'
const FormItem = Form.Item

import InputRenderer from './renderer/input'
import SelectRenderer from './renderer/select'

const comesWithRenderer = {
  input: InputRenderer,
  select: SelectRenderer
}

/** Your component's props */
export interface ISearchFieldProps extends IDataTableProps {
  /** antd form instance */
  form?: WrappedFormUtils,
  fetch: SearchFunc,
  btnLoading: boolean
}

/** Your component's state */
export interface ISearchFieldState {
  expand: boolean
}

/** Your component */
export class SearchField extends React.Component<ISearchFieldProps, ISearchFieldState> {

  state = {
    expand: false
  }

  private shouldHandleCollapse = this.props.maxVisibleFieldCount && this.props.searchFields.length > this.props.maxVisibleFieldCount

  toggleExpand = () => {
    const { expand } = this.state
    this.setState({ expand: !expand })
  }

  getFields = () => {
    const { form, maxVisibleFieldCount, searchFields } = this.props
    if (!form) { return false }
    const { getFieldDecorator } = form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    }
    const count = this.state.expand ? searchFields.length : maxVisibleFieldCount || searchFields.length
    return this.props.searchFields.map((searchField, i) => {
      const renderComponent = () => {
        if (searchField.renderer) {
          // 自定义 renderer
          return searchField.renderer(searchField.payload)
        } else {
          // 自带 renderer
          if (searchField.type) {
            if (comesWithRenderer[searchField.type]) {
              return comesWithRenderer[searchField.type](searchField.payload)
            } else {
              console.warn('Unknown renderer:', searchField.type)
              return false
            }
          } else {
            // 既没有 type 又没有 renderer
            console.warn('Renderer or Type should exist in search field')
            return false
          }
        }
      }
      return (
        <Col span={6} key={i} style={this.shouldHandleCollapse ? { display: i < count ? 'block' : 'none' } : { display: 'block' }}>
          <FormItem {...formItemLayout} label={searchField.label}>
            {getFieldDecorator(searchField.name, { rules: searchField.validationRule })(
              renderComponent()
            )}
          </FormItem>
        </Col>
      )
    })
  }

  clearField = () => {
    const { form } = this.props
    if (!form) { return false }

    form.resetFields()
  }

  onSearch = () => {
    const { form, onError, onValidateFailed, pageSize, fetch } = this.props
    if (!form) { return false }
    const { validateFields } = form

    validateFields((err, values) => {
      // 删除空字段
      for (let key in values) {
        if (!values[key]) {
          delete values[key]
        }
      }
      if (err) {
        onValidateFailed && onValidateFailed(err)
        return
      }
      // 从 search field 搜索从第 1 页开始
      fetch(1, values, true)
    })
  }

  render () {
    return (
      <Form
        className='ant-advanced-search-form'
        style={{ marginBottom: '1em' }}
      >
        <Row gutter={40}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type='primary' onClick={this.onSearch} loading={this.props.btnLoading}>{this.props.searchBtnText}</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.clearField}>
              {this.props.clearBtnText}
            </Button>
            {this.shouldHandleCollapse && (
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggleExpand}>
                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
              </a>
            )}
          </Col>
        </Row>
      </Form>
    )
  }
}

/** Export as default */
export default Form.create<ISearchFieldProps>()(SearchField as any)
