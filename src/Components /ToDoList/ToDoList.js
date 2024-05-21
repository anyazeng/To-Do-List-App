import React from "react";
import Task from "./Task/Task";
import { useState } from "react";
import FilterTasks from "../FilterTasks/FilterTasks";

export default function ToDoList({ tasks, onToggleTask, onDeleteTask }) {
  const [selectOption, setSelectOption] = useState("");

  function handleSelectChange(selectOption) {
    setSelectOption(selectOption);
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectOption === "completed") return task.completed;
    if (selectOption === "not-completed") return !task.completed;
    return true;
  });

  return (
    <div className="list">
      <FilterTasks onSelectChange={handleSelectChange} />
      <ul>
        {filteredTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

// const toDoTasks = [
//   { id: 1, description: "homework", completed: true },
//   { id: 2, description: "tax return", completed: false },
//   { id: 3, description: "laundury", completed: false },
// ];
