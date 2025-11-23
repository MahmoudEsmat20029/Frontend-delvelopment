/*
  Author: Mahmoud Esmat
  Date  : 22-11-2025
*/

/* ============================= Imports ============================= */
import "./Container.css";

// Components
import Buttons from "../Button/Button";
import Task from "../Task/Task";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import { useFilter } from "../Contexts/FilterContext";
import { useToast } from "../Contexts/ToastContext";
import { useTasks } from "../Contexts/TasksContexts";

// Hooks
import { useState, useEffect, useMemo } from "react";

// Dialogs
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

/* ============================= Main function ============================= */
export default function Container() {
  /* =============== Local variables =============== */
  const btns = ["All", "Done", "In Progress"];

  // {Custom} Hooks usage from {Contexts} Hook
  const { filter } = useFilter();
  const { handleToastOpen } = useToast();
  const { tasks, dispatch } = useTasks(); // from {Reducer} Hook

  // {States} Hook usage
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [taskDialoged, setTaskDialoged] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [newTitleInput, setNewTitleInput] = useState("");

  // {Effect} Hook usage
  useEffect(() => {
    dispatch({ type: "get" });
  }, []);

  // {Memos} Hook usage
  const doneTasks = useMemo(() => {
    return tasks.filter((t) => t.isComplete);
  }, [tasks]);

  const notDoneTasks = useMemo(() => {
    return tasks.filter((t) => !t.isComplete);
  }, [tasks]);

  // For visual display
  let tasksDisplay = tasks;

  if (filter === "Done") {
    tasksDisplay = doneTasks;
  } else if (filter === "In Progress") {
    tasksDisplay = notDoneTasks;
  }

  const todoTasks = tasksDisplay.map((t) => (
    <Task
      key={t.id}
      task={t}
      handleDelete={handleDeleteDialogOpen}
      handleEdit={handleClickOpen}
    />
  ));

  /* =============== Local Functions =============== */
  // Open edit dialog
  function handleClickOpen(task) {
    setNewTitleInput(task.title);
    setTaskDialoged(task);
    setOpenEditDialog(true);
  }

  // Close edit dialog
  function handleEditDialogClose() {
    setOpenEditDialog(false);
  }

  // For edit tasks
  function handleEditBtn() {
    dispatch({
      type: "edit",
      payload: { title: newTitleInput, id: taskDialoged.id },
    });
    handleEditDialogClose();
    handleToastOpen("The task was modified");
  }

  // Open delete dialog
  function handleDeleteDialogOpen(task) {
    setTaskDialoged(task);
    setOpenDeleteDialog(true);
  }

  // Close delete dialog
  function handleDeleteDialogClose() {
    setOpenDeleteDialog(false);
  }

  // For delete tasks
  function handleDeleteBtn() {
    dispatch({ type: "delete", payload: taskDialoged });
    setOpenDeleteDialog(false);
    handleToastOpen("The task was deleted");
  }

  return (
    <>
      {/* Dialog delete Start */}
      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle>Are You sure ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You will delete task which title is named: {taskDialoged?.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteBtn}>Delete</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog delete End */}

      {/* Dialog edit Start */}
      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit dialog</DialogTitle>
        <DialogContent sx={{ width: "300px" }}>
          <TextField
            value={newTitleInput}
            autoFocus
            label="New title"
            fullWidth
            variant="standard"
            onChange={(e) => setNewTitleInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditBtn()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditBtn}>Edit</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog edit End */}

      {/* CARD Start */}
      <div className="card">
        {/* Header Start */}
        <h1>TODO List</h1>
        <hr />
        {/* Header End */}

        {/* Buttons Start */}
        <div className="btns">
          {btns.map((btn) => (
            <Buttons key={btn} name={btn} />
          ))}
        </div>
        {/* Buttons End */}

        {/* Tasks Start */}
        <div className="tasks">{todoTasks}</div>
        {/* Tasks End */}

        {/* Create New Task Start */}
        <div className="create">
          <CreateNewTask />
        </div>
        {/* Create New Task End */}
      </div>
      {/* CARD End */}
    </>
  );
}
