// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTableData } from "../Contexts/TableDataContext";

export default function InputField({ setSearch }) {
  const { tableData, setTableData } = useTableData();

  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    price: "",
    count: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  function handleCreate() {
    if (!inputs.title.trim()) return;

    const newRow = {
      id: Date.now(),
      title: inputs.title,
      category: inputs.category,
      price: Number(inputs.price),
      count: Number(inputs.count),
    };

    setTableData([...tableData, newRow]);

    setInputs({
      title: "",
      category: "",
      price: "",
      count: "",
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Container of inputs field Start */}
      <Grid container spacing={2}>
        {/* Title input */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Title"
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </Grid>

        {/* Category input */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Category"
            name="category"
            value={inputs.category}
            onChange={handleInputChange}
          />
        </Grid>

        {/* Price input */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Price"
            name="price"
            value={inputs.price}
            onChange={handleInputChange}
          />
        </Grid>

        {/* Count input */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Count"
            name="count"
            value={inputs.count}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      {/* Container of inputs field End */}

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </Box>

      {/* Search input */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }} sx={{ margin: "20px 0" }}>
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Search by product title ..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
