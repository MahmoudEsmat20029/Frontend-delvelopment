/*
  Author: Mahmoud Esmat
  Date  : 25-11-2025
*/

/* ============================= Imports ============================= */
import "./App.css";

// Components
import ContainerBox from "../Container/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Almarai",
  },
});

/* ============================= Main function ============================= */
function App() {
  /* =============== Local variables =============== */
  return (
    <div className="fake-body">
      <ThemeProvider theme={theme}>
        <ContainerBox />
      </ThemeProvider>
    </div>
  );
}

export default App;
