import React, { useState } from "react";

export default function AddTasks({ onAddTasks }) {
  const [description, setDescription] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (!description) return;
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };

    onAddTasks(newTask);

    setDescription("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter tasks..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}