/*
  Author: Mahmoud Esmat
  Date  : 22-12-2025
*/

// ====================== Imports ======================
// Hooks
import { useState } from "react";

// Custom Hook
import { useTableData } from "../Contexts/TableDataContext";

// MUI imports
import InputField from "./InputField";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "./Table";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// ====================== Main Function ======================
export default function MainComponenets() {
  // Call custom hook
  const { tableData, setTableData } = useTableData();

  // useState Hooks
  const [search, setSearch] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [inputEdit, setInputEdit] = useState("");
  const [editId, setEditId] = useState(0);

  // ======= Edit functions
  function handleEditDialogOpen(id) {
    const item = tableData.find((element) => element.id === id);
    setInputEdit(item.title);
    setEditId(id);
    setEditOpen(true);
  }

  function handleEditDialogClose() {
    setEditOpen(false);
  }

  function handleEdit() {
    if (!inputEdit.trim()) return;

    const EditedData = tableData.map((item) => {
      return editId === item.id
        ? {
            ...item,
            title: inputEdit,
          }
        : item;
    });

    setTableData(EditedData);
    setEditOpen(false);
    setInputEdit("");
  }

  // ======= Delete functions
  function handleDeleteDialogOpen(id) {
    setEditId(id);
    setDeleteOpen(true);
  }

  function handleDeleteDialogClose() {
    setDeleteOpen(false);
  }

  function handleDelete() {
    const newData = tableData.filter((item) => item.id !== editId);
    setTableData(newData);
    setDeleteOpen(false);
  }

  return (
    <>
      {/* Dialog Edit Start */}
      <Dialog open={editOpen} onClose={handleEditDialogClose}>
        {/* Header of Dialog */}
        <DialogTitle>Edit</DialogTitle>

        {/* Body of Dialog */}
        <DialogContent>
          <DialogContentText>
            Edit this product which named{" "}
            {tableData.map((data) => (data.id === editId ? data.title : ""))}
          </DialogContentText>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            <TextField
              label="Title"
              type="text"
              fullWidth
              required
              variant="standard"
              value={inputEdit}
              onChange={(e) => setInputEdit(e.target.value)}
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Edit End */}

      {/* Dialog Delete Start */}
      <Dialog open={deleteOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>
          Are You Sure you want to delete this <br /> product which named{" "}
          {tableData.map((data) => (data.id === editId ? data.title : ""))} ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Delete End */}

      <div className="container">
        <h1
          style={{ textAlign: "center", marginBottom: "10px", color: "#0d6efd" }}
        >
          CRUDS
        </h1>

        <InputField setSearch={setSearch} />

        <Table
          search={search}
          handleEdit={handleEdit}
          handleEditDialogOpen={handleEditDialogOpen}
          handleDeleteDialogOpen={handleDeleteDialogOpen}
        />
      </div>
    </>
  );
}
