import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./SCSS/Home.css";
import { useTheme } from "../../Contexts/ThemeContext";
import { useOpenAboutDialog } from "../../Contexts/OpenAboutDialogContext";

export default function Body() {
  const { mode } = useTheme();
  const { setOpenAboutDialog } = useOpenAboutDialog();

  const icons = [
    { name: "GitHub", icon: faGithub, link: "https://github.com/Mahmoud3smat" },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/mahmoud-esmat-120a0b24a/",
    },
    {
      name: "Facebook",
      icon: faFacebook,
      link: "https://www.facebook.com/mahmoud.esmat.818672/",
    },
  ];

  return (
    <div className="main-body" id="home">
      {/* //! -------- 1st section (Home) -------- */}
      <section className="home-section" id="home">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 home-right">
            <h1>
              Hi, I'm <br />
              <span>Mahmoud Esmat</span>
            </h1>
            <p className="track">
              Frontend Developer <b>.</b> React Specialist
            </p>
            <p className="about-me">
              I build beautiful, responsive, and interactive web applications
              using{" "}
              <span>
                HTML, CSS, <br /> JavaScript, Bootstrap, React JS and etc
              </span>
              .
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-5 mt-3 mt-md-5 home-buttons">
              <button
                type="button"
                className={`btn px-3 px-md-4 ${
                  mode === "dark" ? "btn-danger" : "btn-primary"
                }`}
                onClick={() => setOpenAboutDialog(true)}
              >
                About Me
              </button>
              <button
                type="button"
                className={`btn px-3 px-md-4 ${
                  mode === "dark" ? "btn-outline-danger" : "btn-outline-primary"
                }`}
              >
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Me
                </a>
              </button>
            </div>

            <div className="d-flex m-4 icons justify-content-center justify-content-md-start">
              {icons.map((icon, index) => {
                return (
                  <a
                    className="d-flex align-items-center justify-content-center"
                    key={index}
                    data-tip={icon.name}
                    href={icon.link}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={icon.icon} />
                  </a>
                );
              })}
              <a
                className="d-flex align-items-center justify-content-center"
                data-tip="WhatsApp"
                href="https://wa.me/201012069129"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 home-left">
            <img src="/myPic.jpeg" alt="This is My Picture" className="myPic" />
          </div>
        </div>
      </section>
      {/* //? -------- 1st section (Home) -------- */}
    </div>
  );
}
