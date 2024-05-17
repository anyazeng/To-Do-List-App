import React from "react";
import Task from "./Task/Task";

export default function ToDoList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

// const toDoTasks = [
//   { id: 1, description: "homework", completed: false },
//   { id: 2, description: "tax return", completed: false },
//   { id: 3, description: "laundury", completed: false },
// ];
