import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        check={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
