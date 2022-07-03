import React from "react";
import TaskList from "./TaskList";
import "../css/MainContainer.css";

function MainContainer() {
  return (
    <div className="mainContainer">
      <h1>to do list</h1>
      <TaskList />
    </div>
  );
}

export default MainContainer;
