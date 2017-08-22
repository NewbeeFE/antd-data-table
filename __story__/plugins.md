# Plugins

Sometimes we need to select multiple rows and do some actions with them. Plugin is born for it:

```tsx
const plugins: Plugin[] = [
  {
    renderer (selectedRowKeys, selectedRows, clearSelectionCallback) {
      const onClick = () => {
        action('onClick test plugin')(selectedRowKeys)
        clearSelectionCallback()
      }
      return (
        <Button onClick={onClick}>Plugin A</Button>
      )
    }
  },
  {
    renderer (selectedRowKeys, selectedRows, clearSelectionCallback) {
      const onClick = () => {
        action('onClick test plugin')(selectedRowKeys)
        clearSelectionCallback()
      }
      return (
        <Button onClick={onClick}>Plugin 2</Button>
      )
    }
  }
]

render(
  <DataTable
    rowKey={record => record.id}
    searchFields={searchFields}
    plugins={plugins}
    initialColumns={columns}
    onSearch={onSearch}
  />
, mountNode)

```
