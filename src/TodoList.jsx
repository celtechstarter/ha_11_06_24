import React, { useState } from "react";
import "./styles.css";

function TodoList() {
  const [tasks, setTasks] = useState(["eat", "sleep", "code", "repeat"]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask !== "") setTasks((t) => [...tasks, newTask]);
    setNewTask("");
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function moveTaskUp() {}
  function moveTaskDown() {}

  function deleteTask(index) {
    const updateTasks = tasks.filter((task, i) => i !== index);
    setTasks(updateTasks);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter new text"
          className="input-field"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}></button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              {/* <button className="up-button" onClick={() => moveTaskUp(index)}>
                UP
              </button> */}
              {/* <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                DOWN
              </button> */}
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              ></button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
