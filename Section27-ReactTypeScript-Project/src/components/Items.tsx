import Todos from "./Todos";

const Items: React.FC<{text: string}> = (props) => {
  return <li>{props.text}</li>;
};

export default Items;
