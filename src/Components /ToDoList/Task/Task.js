import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleTask(task.id)} />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
