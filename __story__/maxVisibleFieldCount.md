# maxVisibleFieldCount

When search field form items are too many to display. You could set a `maxVisibleFieldCount`. When the length of search fields is large than the `maxVisibleFieldCount`, data table will automatically render a collapse button:

```tsx
<DataTable
  rowKey={record => record.id}
  searchFields={searchFields}
  initialColumns={columns}
  onSearch={onSearch}
  maxVisibleFieldCount={3}
/>
```