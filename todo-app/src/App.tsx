import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useState } from "react";

export type TaskType = {
  task: string;
  description?: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleNewTask = (task: string, description?: string) => {
    const newTask: TaskType = {
      task: task,
      description: description,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <TaskForm onSubmit={handleNewTask} />
      <ul className="list-group container pt-3">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
