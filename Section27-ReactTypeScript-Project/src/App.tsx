import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

const todos = [new Todo('Learn React'),new Todo('Learn TypeScript')]
function App() {
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
