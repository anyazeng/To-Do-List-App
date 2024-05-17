import AddTasks from "./Components /AddTasks/AddTasks";
import ToDoList from "./Components /ToDoList/ToDoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleCompleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1>Add Tasks</h1>
      </header>
      <AddTasks onAddTasks={handleAddTasks} />
      <ToDoList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
