import React, { useRef } from "react";

const NewTodos: React.FC<{}> = (props) => {
const todoInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value 
    // ? indicates that the value may or may not be present at all times
    // ! indicates that the value will always be present and will never be null

    if(enteredText.trim().length === 0) {
      //normally throw an error
      return;
    }

  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text:</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
