import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './coperations';

const todosSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: { items: [], isLoading: false, error: null },
  // Об'єкт редюсерів
  extraReducers: {
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchTodos.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    //////////////
    /////////////
    [addTodo.pending](state) {
      state.isLoading = true;
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addTodo.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    //////////////
    /////////////
    [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteTodo.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Редюсер слайсу
export const todosReducer = todosSlice.reducer;
