import React, { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    // ? indicates that the value may or may not be present at all times
    // ! indicates that the value will always be present and will never be null

    if (enteredText.trim().length === 0) {
      //normally throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text:</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
