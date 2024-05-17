import React from "react";

export default function Task({ task }) {
  return (
    <li>
      <input type="checkbox"></input>
      <span>{task.description}</span>
      <button>❌</button>
    </li>
  );
}
