import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";
import "../css/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="taskListContainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
