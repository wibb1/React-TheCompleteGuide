import './App.css';
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  
const [todos, setTodos] = useState<Todo[]>([])

const addTodoHandler = (text: string) => {
  setTodos((prevTodos) => {
    const newTodo = new Todo(text);
    return prevTodos.concat(newTodo)
  })
}
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
