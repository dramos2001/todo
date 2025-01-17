import { TaskType } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faTrash, faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  task: TaskType;
}

function Task({ task }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <button type="button" className="btn">
        <FontAwesomeIcon icon={faBars} className="text-secondary" />
      </button>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{task.task}</div>
        {task.description}
      </div>
      <button type="button" className="btn">
        <FontAwesomeIcon icon={faPenNib} />
      </button>
      <button type="button" className="btn">
        <FontAwesomeIcon icon={faTrash} className="text-danger"/>
      </button>
    </li>
  );
}
export default Task;
