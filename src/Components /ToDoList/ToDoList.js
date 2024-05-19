import React from "react";
import Task from "./Task/Task";

export default function ToDoList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
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
