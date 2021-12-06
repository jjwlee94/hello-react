import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { buttonText, clickButton } = props;

  return <button onClick={clickButton}>{buttonText}</button>;
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <Button buttonText={"RESET"} clickButton={reset} />
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
