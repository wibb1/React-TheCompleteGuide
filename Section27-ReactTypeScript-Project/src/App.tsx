import './App.css';
import ToDos from './components/ToDos';

const items = ['1','2','3','4']
function App() {
  return (
    <div>
      <ToDos items={items}/>
    </div>
  );
}

export default App;
