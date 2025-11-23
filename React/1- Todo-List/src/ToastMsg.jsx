import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackbarsToast({ open, message }) {
  return (
    <>
      <Snackbar open={open}>
        <Alert variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
