export const selectTodos = state => state.todos.items;
export const selectFilter = ({ filter }) => filter;
export const selectFilteredTodos = ({ todos: { items }, filter }) => {
  if (!filter) {
    return items
  }

  return items.filter(item => item.text.toLowerCase().includes(filter.toLowerCase()))
}