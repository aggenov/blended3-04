import { Container, Header, SearchForm, Section, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilter,
  selectIsLoading,
  selectTodos,
} from 'redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';
import { setFilter } from 'redux/filterSlice';
import { useEffect } from 'react';
import { fetchTodos } from 'redux/coperations';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <label>
            <input
              type="input"
              value={filter}
              onChange={e => dispatch(setFilter(e.target.value))}
            />
          </label>
          <SearchForm />
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
