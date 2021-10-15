import React, { useState, useRef } from "react";
import classes from "../../CSS/Users/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trimEnd().length <= 0 || enteredAge.trim().length <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty name and age)",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (age >= 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>
            Username
            <input name="username" type="text" ref={nameInputRef}></input>
          </label>
          <label>
            Age (Years)
            <input name="age" type="number" ref={ageInputRef}></input>
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
