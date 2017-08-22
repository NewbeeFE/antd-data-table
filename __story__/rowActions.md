# Row Actions

Use when you wanna operate a specific row data.

```tsx
const actions: RowAction[] = [
  {
    label: 'Edit',
    action (record) {
      console.log('onClick edit', record)
    }
  },
  {
    label: 'More',
    children: [
      {
        label: 'Remove',
        action (record) {
          console.log('onClick remove', record)
        }
      },
      {
        label: 'Open',
        action (record) {
          console.log('onClick open', record)
        }
      }
    ]
  }
]

render (
  <DataTable
    rowKey={record => record.id}
    searchFields={searchFields}
    initialColumns={columns}
    onSearch={onSearch}
    rowActions={actions}
  />
, mountNode)
```
