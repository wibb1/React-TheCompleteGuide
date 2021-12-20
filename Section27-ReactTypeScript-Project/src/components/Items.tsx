import classes from './Items.module.css'

const Items: React.FC<{text: string}> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default Items;
