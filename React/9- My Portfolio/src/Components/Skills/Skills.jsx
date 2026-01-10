import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLanguage,
  faCode,
  faDiagramProject,
  faLaptopCode,
  faC,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faSass,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const cards = [
    { icon: faBriefcase, text: "+1", expert: "Experience" },
    { icon: faLanguage, text: "+5", expert: "Languages" },
    { icon: faCode, text: "+15", expert: "Technologies" },
    { icon: faDiagramProject, text: "+20", expert: "Projects" },
  ];

  const frontend = [
    { icon: faHtml5, name: "HTML-5" },
    { icon: faCss3Alt, name: "CSS-3" },
    { icon: faJs, name: "JS" },
    { icon: faBootstrap, name: "Bootstrap" },
    { icon: faSass, name: "SCSS" },
    { icon: faReact, name: "React" },
  ];

  const programming = [
    { icon: faJs, name: "JavaScript" },
    { icon: faCubes, name: "OOP" },
    { icon: faC, name: "C" },
    { icon: faDiagramProject, name: "Data Structure" },
    { icon: faJava, name: "Java" },
    { icon: faCode, name: "C++" },
  ];

  return (
    <section className="skills" id="skills">
      <header>
        <h1>
          My <span>Skills</span>
        </h1>

        <p className="overview">
          A comprehensive overview of my technical abilities and expertise
        </p>
      </header>

      <main>
        {/* //! ------ 1st Cards ------ */}
        <div className="row">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 mb-3 mb-sm-0"
              >
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={card.icon} />
                    </h5>
                    <p className="card-text">{card.text}</p>
                    <p className="expert">{card.expert}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* //? ------ 1st Cards ------ */}

        {/* //! ------ 2nd Cards ------ */}
        <div className="col-12 mt-3 lang">
          <header>
            <FontAwesomeIcon className="icon-head" icon={faLaptopCode} />
            <h1>Frontend Development</h1>
          </header>

          <div className="row col-12 mt-3">
            {frontend.map((card, index) => {
              return (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">
                        <FontAwesomeIcon icon={card.icon} />
                      </h5>
                      <p className="text">{card.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* //? ------ 2nd Cards ------ */}

        {/* //! ------ 3rd Cards ------ */}
        <div className="col-12 mt-3 lang">
          <header>
            <FontAwesomeIcon className="icon-head" icon={faCode} />
            <h1>Programming</h1>
          </header>

          <div className="row col-12 mt-3">
            {programming.map((card, index) => {
              return (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">
                        <FontAwesomeIcon icon={card.icon} />
                      </h5>
                      <p className="text">{card.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* //? ------ 3rd Cards ------ */}
      </main>
    </section>
  );
}
