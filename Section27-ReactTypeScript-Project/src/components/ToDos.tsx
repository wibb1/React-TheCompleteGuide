import Todo from "../models/todo";
import Items from "./Items";
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => <Items key={item.id} text={item.text} />)}
    </ul>
  );
};

export default Todos;
