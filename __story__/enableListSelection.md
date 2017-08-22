# List selection

When columns are too many to display, you could enable list selection. It will render a dropdown button at the top of table, which has some checkbox to toggle the visible of each columns.

Be sure when the `enableListSelection` is true, you must pass a unique `name` to data table. Because it will save the visible columns key on localStorage.

```tsx
<DataTable
  name='test'
  enableListSelection
  rowKey={record => record.id}
  searchFields={searchFields}
  initialColumns={columns}
  onSearch={onSearch}
/>
```