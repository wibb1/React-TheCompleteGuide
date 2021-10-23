import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameInputBlurHandler = () => {
    setNameTouched(true)

    if(enteredName.trim() === '') {
      setNameIsValid(false);
    } 
  }

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name Input Valid");
    }
  }, [nameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
    if(event.target.value.trim() !== '') {
      setNameIsValid(true);
    } 
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    // State version - use when you want to validate the field as it is typed and you want to have a form that can be cleared/reset on submission or used to edit an existing value
    console.log(`State Value: ${enteredName}`);

    //Ref version - use when you only need new values and only need to check it once
    const enteredValue = nameInputRef.current.value;
    console.log(`Ref Value: ${enteredValue}`);

    // nameInputRef.current.value = ''; //>>> NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredName("");
  };

  const nameInputIsInvalid = !nameIsValid && nameTouched;

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
