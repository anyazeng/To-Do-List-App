import React, { useState } from "react";

export default function AddTasks({ onAddTasks }) {
  const [description, setDescription] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (!description) return;
    const newTask = {
      description,
      completed: false,
      id: Date.now(),
    };

    onAddTasks(newTask);

    setDescription("");
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Enter tasks..."
        size="30"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
