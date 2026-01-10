//! CSS file to make styles
import "./SCSS/Navbar.css";

//! Bootstrab features
import CustomizedSwitches from "../../Components/ToggleButton/ToggleButton";

//! Hooks
import { useState } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import { useOpenAboutDialog } from "../../Contexts/OpenAboutDialogContext";

//! MUI features
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//! FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//! Main function
export default function Navbar() {
  //! Hooks
  const { mode } = useTheme();
  const { setOpenAboutDialog } = useOpenAboutDialog();
  const [active, setActive] = useState("Home");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      {/* navbar-dark bg-dark */}
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container-fluid">
          {/* //! ------- Logo -------  */}
          <a className="navbar-brand" href="/">
            Portfolio
          </a>

          {/* //! ------- Appear at small window ------- */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <FontAwesomeIcon icon={faBars} className="menu-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* //! ------- Middle Navbar ------- */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 middle-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "Home" ? "active" : ""}`}
                  onClick={() => setActive("Home")}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active == "About" ? "active" : ""}`}
                  onClick={() => setOpenAboutDialog(true)}
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "Skills" ? "active" : ""}`}
                  onClick={() => setActive("Skills")}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    active === "Projects" ? "active" : ""
                  }`}
                  onClick={() => setActive("Projects")}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "Contact" ? "active" : ""}`}
                  onClick={() => setActive("Contact")}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* //!------- Toggle the button of the Theme ------- */}
            <ThemeProvider theme={theme}>
              <CustomizedSwitches />
            </ThemeProvider>

            {/* //!------- CV & Social Media ------- */}
            <a href="https://github.com/Mahmoud3smat" target="_blank">
              GitHub
              <OpenInNewIcon className="new-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-esmat-120a0b24a/"
              target="_blank"
            >
              LinkedIn
              <OpenInNewIcon className="new-icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/1UQiW3YCvRS_YFL0lDXFIzpjJ5mYhQSXg/view?usp=drive_link"
              target="_blank"
            >
              Resume
              <OpenInNewIcon className="new-icon" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
