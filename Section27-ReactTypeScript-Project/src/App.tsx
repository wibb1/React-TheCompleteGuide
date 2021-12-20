import './App.css';
import Todos from './components/Todos';

const items = ['1','2','3','4']
function App() {
  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;
