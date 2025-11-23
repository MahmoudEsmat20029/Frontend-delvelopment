import "./Task.css";

// Icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

// Components
import { useTasks } from "../Contexts/TasksContexts";
import { useToast } from "../Contexts/ToastContext";

// Main function
export default function Task({ task, handleDelete, handleEdit }) {
  // {Custom} Hooks
  const { dispatch } = useTasks();
  const { handleToastOpen } = useToast();

  // For done tasks
  function handleDoneBtn() {
    dispatch({ type: "complete", payload: { id: task.id } });
    handleToastOpen(
      task.isComplete
        ? "The mission is not complete"
        : "The mission is complete"
    );
  }

  // Open edit dialog
  function handleClickOpen() {
    handleEdit(task);
  }

  // Open delete dialog
  function handleDeleteDialogOpen() {
    handleDelete(task);
  }

  return (
    <>
      <div className="task">
        {/* Title Start */}
        <h3 className={task.isComplete ? "line" : ""}>{task.title}</h3>
        {/* Title End */}

        {/* Task Buttons (Done, Edit and Delete) Start */}
        <ul>
          <li
            className={task.isComplete ? "active" : ""}
            onClick={handleDoneBtn}
          >
            <DoneAllOutlinedIcon />
          </li>
          <li onClick={handleClickOpen}>
            <ModeEditOutlinedIcon />
          </li>
          <li onClick={handleDeleteDialogOpen}>
            <DeleteOutlineOutlinedIcon />
          </li>
        </ul>
        {/* Task Buttons (Done, Edit and Delete) End */}
      </div>
    </>
  );
}
