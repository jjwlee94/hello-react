import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { buttonText, clickButton } = props;

  return <button onClick={clickButton}>{buttonText}</button>;
};

const Application = () => {
  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button buttonText={"RESET"} clickButton={reset} />
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
