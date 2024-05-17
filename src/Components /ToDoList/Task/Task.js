import React from "react";

export default function Task({ task, onCompleteTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        id="check-complete"
        onClick={() => onCompleteTask(task.id)}
      ></input>
      <label for="check-complete"></label>
      <span>{task.description}</span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
