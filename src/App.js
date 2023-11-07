import logo from './logo.svg';
import './App.css';
import Input from './Input';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo List😉</h1>
        <Input setTodos={setTodos}></Input>
        <TodoList></TodoList>
    </div>
  );
}

export default App;

const test = [
  {
    id: uuidv4(),
    title: 'title 1',
    contents: 'contents 1',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'title 2',
    contents: 'contents 2',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: 'title 3',
    contents: 'contents 3',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'title 4',
    contents: 'contents 4',
    isDone: true,
  },
]