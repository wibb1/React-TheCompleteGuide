import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("APP RUNNING");

  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const allowToggleHandler = () => {
    setAllowToggle((prevShowP) => !prevShowP)
  }

  const toggleButtonHandler = useCallback(() => {
    if(allowToggle){
      setShowP((prevShowP) => !prevShowP);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>{" "}
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleButtonHandler}>Toggle Paragraph</Button>
      <DemoOutput show={showP} />
    </div>
  );
}

export default App;
