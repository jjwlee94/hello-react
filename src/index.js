import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { buttonText } = props;
  return <button>{buttonText}</button>;
};

const Application = () => {
  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button buttonText={"RESET"} />
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
