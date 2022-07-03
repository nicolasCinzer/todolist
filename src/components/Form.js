import React, { useState } from "react";
import "../css/Form.css";
import { v4 as uuidv4 } from "uuid";

function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const sendTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      done: false,
    };

    onSubmit(newTask);
  };

  return (
    <form className="taskForm" onSubmit={sendTask}>
      <input
        className="input"
        type="text"
        placeholder="Write a Task"
        name="text"
        onChange={getInput}
      />
      <button className="addButton">add</button>
    </form>
  );
}

export default Form;
