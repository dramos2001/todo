import { TaskType } from "../App";

interface Props {
  task: TaskType;
}

function Task({ task }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{task.task}</div>
        {task.description}
      </div>
      <button type="button" className="btn">Edit</button>
    </li>
  );
}
export default Task;
