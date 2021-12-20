import React from 'react';
import classes from './Items.module.css'

const Items: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default Items;
