import AddTasks from "./Components /AddTasks/AddTasks";
import ToDoList from "./Components /ToDoList/ToDoList";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("My tasks"));
    if (Array.isArray(data) && data.length > 0) {
      setTasks(data);
    } //convert back to js obj
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("My tasks", JSON.stringify(tasks)); //convert JSON string
    }
  }, [tasks, loading]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container">
      <header>
        <h1>Add Tasks</h1>
      </header>
      <AddTasks onAddTasks={handleAddTasks} />
      <ToDoList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
