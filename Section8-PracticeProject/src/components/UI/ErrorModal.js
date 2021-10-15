import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "../../CSS/UI/ErrorModal.module.css";

const ErrorModal = (props) => {
  
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p className={classes.message}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick ={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
