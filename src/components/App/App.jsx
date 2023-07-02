import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';
import { setFilter } from 'redux/filterSlice';


export const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const filter = useSelector(selectFilter)

    return (
      <>
        <Header />
        <Section>
          <Container>
            <label>
              <input type="input" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
            </label>
            <SearchForm />

            {todos.length === 0 && (
              <Text textAlign="center">There are no any todos ... </Text>
            )}
          <TodoList/>
            
          </Container>
        </Section>
      </>
    );
  }

