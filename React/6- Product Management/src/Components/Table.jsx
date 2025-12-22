import { useTableData } from "../Contexts/TableDataContext";

// Icons imports
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Table({
  search,
  handleEditDialogOpen,
  handleDeleteDialogOpen,
}) {
  const { tableData } = useTableData();

  const filteredData = tableData.filter((item) =>
    item.title?.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <table
      id="table"
      className="table table-bordered border-primary"
      style={{ textAlign: "center" }}
    >
      <thead>
        <tr>
          <th style={{ color: "#0d6efd" }}>#</th>
          <th style={{ color: "#0d6efd" }}>Title</th>
          <th style={{ color: "#0d6efd" }}>Category</th>
          <th style={{ color: "#0d6efd" }}>Price</th>
          <th style={{ color: "#0d6efd" }}>Count</th>
          <th style={{ color: "#0d6efd" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((data, index) => {
          return (
            <tr key={data.id}>
              <th scope="row">{index + 1}</th>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.price}</td>
              <td>{data.count}</td>
              <td>
                <IconButton
                  aria-label="delete"
                  sx={{ color: "#0d6efd" }}
                  onClick={() => handleEditDialogOpen(data.id)}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  aria-label="delete"
                  sx={{ color: "#dc3545" }}
                  onClick={() => handleDeleteDialogOpen(data.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
