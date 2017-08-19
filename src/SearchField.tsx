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
import { IDataTableProps } from './'
const FormItem = Form.Item

/** Your component's props */
export interface ISearchFieldProps extends IDataTableProps {
  /** antd form instance */
  form?: WrappedFormUtils,
  /** patch response result handler */
  applyData: (data: any[]) => void
}

/** Your component's state */
export interface ISearchFieldState {
  expand: boolean,
  loading: boolean
}

/** Your component */
export class SearchField extends React.Component<ISearchFieldProps, ISearchFieldState> {

  state = {
    expand: false,
    loading: false
  }

  toggleExpand = () => {
    const { expand } = this.state
    this.setState({ expand: !expand })
  }

  getFields = () => {
    if (!this.props.form) { return false }
    const count = this.state.expand ? 10 : 6
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const children: JSX.Element[] = []
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder='placeholder' />
            )}
          </FormItem>
        </Col>
      )
    }
    return children
  }

  clearField = () => {
    const { form } = this.props
    if (!form) { return false }

    form.resetFields()
  }

  onSearch = () => {
    const { form, onError, onSearch, onValidateFailed, applyData } = this.props
    if (!form) { return false }
    const { validateFields } = form

    validateFields(async (err, values) => {
      if (err) {
        onValidateFailed && onValidateFailed(err)
        return
      }

      try {
        this.setState({
          loading: true
        })
        const res = await this.props.onSearch({
          page: 1,
          pageSize: 10,
          values
        })
        applyData(res.data)
      } catch (e) {
        onError && onError(e)
      } finally {
        this.setState({
          loading: false
        })
      }
    })
  }

  render () {
    return (
      <Form
        className='ant-advanced-search-form'
      >
        <Row gutter={40}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type='primary' onClick={this.onSearch} loading={this.state.loading}>Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.clearField}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggleExpand}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}

/** Export as default */
export default Form.create<ISearchFieldProps>()(SearchField as any)
