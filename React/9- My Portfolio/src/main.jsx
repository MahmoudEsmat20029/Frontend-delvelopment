import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./APP/App.jsx";

// for theme
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";
import { OpenAboutDialogProvider } from "./Contexts/OpenAboutDialogContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <OpenAboutDialogProvider>
        <App />
      </OpenAboutDialogProvider>
    </ThemeProvider>
  </StrictMode>
);
