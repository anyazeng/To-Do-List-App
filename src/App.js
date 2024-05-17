import "./App.css";
import AddTasks from "./Components /AddTasks/AddTasks";
import ToDoList from "./Components /ToDoList/ToDoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="container">
      <header>
        <h1>To Do</h1>
      </header>
      <AddTasks onAddTasks={handleAddTasks} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
