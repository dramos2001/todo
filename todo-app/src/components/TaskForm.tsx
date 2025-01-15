import "../App.css";
import { ChangeEvent, MouseEvent, useState } from "react";

interface Props {
  onSubmit: (taskName: string, taskDescription?: string) => void;
}

function TaskForm({ onSubmit }: Props) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setTaskDescription(event.target.value);
  };

  const handleFormSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (taskName.trim()) {
      onSubmit(taskName, taskDescription);
      setTaskName("");
      setTaskDescription("");
      console.log("Success!");
    }
  };

  return (
    <form className="container p-3 rounded shadow-sm">
      <label htmlFor="task-name">Task</label>
      <input
        className="form-control"
        type="text"
        id="task-name"
        name="task-name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <label htmlFor="task-description">Description <span className="text-secondary fw-light">(optional)</span></label>
      <input
        className="form-control"
        type="text"
        id="task-description"
        name="task-description"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
      />
      <div className="d-grid col-2 py-3">
        <input
          className="btn btn-outline-success btn-lg"
          type="submit"
          value="Submit"
          onClick={handleFormSubmit}
        />
      </div>
    </form>
  );
}
export default TaskForm;
