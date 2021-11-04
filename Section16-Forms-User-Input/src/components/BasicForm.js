import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((input) => input.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((input) => input.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((input) => input.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const checkClassName = (input) => {
    return input ? "form-control invalid"
    : "form-control"; 
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={checkClassName(firstNameHasError)}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" 
            onChange={firstNameChangeHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className='error-text'>First name must not be blank</p>}
        </div>
        <div className={checkClassName(lastNameHasError)}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && <p className='error-text'>Last name must not be blank</p>}
        </div>
      </div>

      <div className={checkClassName(emailHasError)}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
          {emailHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
