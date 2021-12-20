import Todo from "../models/todo";
import Items from './Items'

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map(item => <Items key={item.id} text={item.text} />)}
    </ul>
  );
};

export default Todos;
