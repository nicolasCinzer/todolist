import React from "react";
import "../css/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, done, completeTask, deleteTask }) {
  return (
    <div className={done ? "taskContainer done" : "taskContainer"}>
      <div className="textContainer" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="deleteIconContainer" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="deleteIcon" />
      </div>
    </div>
  );
}

export default Task;
