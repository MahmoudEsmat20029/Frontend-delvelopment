import "./CreateNewTask.css";

// Components
import TextField from "@mui/material/TextField";
import { useTasks } from "../Contexts/TasksContexts";
import { useToast } from "../Contexts/ToastContext";
import { useState } from "react";

// Main function
export default function CreateNewTask() {
  // {Custom} Hook usage from {Contexts} Hook from {Reducer} Hook
  const { dispatch } = useTasks();
  // {Custom} Hook from {Context} Hook
  const { handleToastOpen } = useToast();

  // {States} Hook usage
  const [titleInput, setTitleInput] = useState("");

  // Local function
  function handleAddClicked() {
    dispatch({ type: "create", payload: { title: titleInput } });
    setTitleInput("");
    handleToastOpen("The new mission was added");
  }

  return (
    <div className="create-input">
      <button onClick={handleAddClicked}>Create</button>
      <TextField
        className="input"
        label="Create new task"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddClicked()}
      />
    </div>
  );
}
