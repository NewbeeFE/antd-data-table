# Basic usage

A simplest data table:

```tsx
const searchFields: SearchField[] = [
  {
    label: 'ID',
    name: 'id',
    type: 'input',
    payload: {
      props: {
        placeholder: 'placeholder'
      }
    }
  },
  {
    label: 'Select',
    name: 'select',
    type: 'select',
    payload: {
      props: {
        allowClear: true
      },
      options: [
        { key: '1', label: 'one', value: '1' },
        { key: '2', label: 'two', value: '2' },
        { key: '3', label: 'three', value: '3' }
      ]
    }
  },
  {
    label: 'Multi Select',
    name: 'multi-select',
    type: 'select',
    payload: {
      props: {
        mode: 'multiple'
      },
      options: [
        { key: '1', label: 'one', value: '1' },
        { key: '2', label: 'two', value: '2' },
        { key: '3', label: 'three', value: '3' }
      ]
    }
  }
]

const columns: TableColumnConfig<any>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id'
  }, {
    key: 'title',
    title: 'Title',
    dataIndex: 'title'
  }
]

const onSearch = async ({ page, pageSize, values }) => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: page,
      _limit: pageSize,
      ...values
    }
  })
  return {
    dataSource: res.data,
    total: Number(res.headers['x-total-count'])
  }
}

<DataTable
  rowKey={record => record.id}
  searchFields={searchFields}
  initialColumns={columns}
  onSearch={onSearch}
/>
```

#### `rowKey: (record) => string`

Every row should have a unique key.

#### `searchFields: SearchField[]`

A `SearchField` is a form item on the search field form. It has following options:

- **label: string** Pass to `<Form.Item>`'s `label` property.
- **name: string** Pass to `getFieldDecorator` as the decorator name.
- **type?: RenderType** antd-data-table comes with some common form item type. Such as `input`, `select`.
- **renderer?: (payload?: object) => React.ReactNode** When the form item types are not statisfied, your could write your own renderer. the `ReactNode` that returned will be wrapped by `getFieldDecorator`.
- **validationRule?: ValidateionRule[]** antd validation rules. Pass to `getFieldDecorator(name, { rules })`.
- **payload?: { props: any, [key: string]: any }** Some params that pass to the renderer.

##### out of the box render type

##### input

```ts
interface payload {
  props: object
}
```

##### select

```ts
interface payload {
  props: object,
  options: {
    key: string,
    label: string,
    value: string
  }[]
}
```

#### `initialColumns: TableColumnConfig[]`

antd's TableColumnConfig. See more at https://ant.design/components/form/


#### `onSearch: (info: SearchInfo) => Promise<{ dataSource: any[], total: number }>`

`onSearch` property need a function that return a Promise, which resolves an object that contains `total` and `dataSource`.

```ts
type SearchInfo = {
  /** values from `getFieldsValue()` */
  values: any,
  /** current page */
  page: number,
  /** page size */
  pageSize: number
}
```