import React, { useState } from "react";
import classes from "../../CSS/Users/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trimEnd().length <= 0 || enteredAge.trim().length <= 0) {
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

    props.onAddUser(enteredAge, enteredUsername);
    clearForm();
  };

  const clearForm = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>
            Username
            <input
              value={enteredUsername}
              name="username"
              type="text"
              onChange={usernameChangeHandler}
            ></input>
          </label>
          <label>
            Age (Years)
            <input
              name="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
