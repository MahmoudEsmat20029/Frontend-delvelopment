import Dialog from "@mui/material/Dialog";
import { useOpenAboutDialog } from "../../Contexts/OpenAboutDialogContext";
import "./AboutDialog.css";

import myPic from "../../../public/myPic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function AboutDialog() {
  const { openAboutDialog, setOpenAboutDialog } = useOpenAboutDialog();

  const handleClose = () => {
    setOpenAboutDialog(false);
  };

  return (
    <Dialog
      maxWidth="md"
      className="dialog"
      open={openAboutDialog}
      onClose={handleClose}
    >
      <section>
        <header className="header">
          <img src={myPic} alt="myPic" />
          <div>
            <h3>Mahmoud Esmat 👀</h3>
            <h5>Frontend Developer</h5>
            <p>
              I am a Frontend Developer. I specialize in building responsive,
              interactive, and modern web applications using HTML, CSS,
              JavaScript and react.js.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </li>
            </ul>
          </div>
        </header>

        <main className="main">
          <h4>Skills & Technologies</h4>
          <ul>
            <li>Frontend</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>SCSS</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>

          <hr />

          <button className="active">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://github.com/Mahmoud3smat"
              target="_blank"
            >
              Explore My Work
            </a>
          </button>
          <button>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://drive.google.com/file/d/1UQiW3YCvRS_YFL0lDXFIzpjJ5mYhQSXg/view?usp=drive_link"
              target="_blank"
            >
              Get My Resume
            </a>
          </button>
        </main>
      </section>
    </Dialog>
  );
}
