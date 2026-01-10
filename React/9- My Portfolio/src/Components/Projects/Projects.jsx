import "./Projects.css";
import { projects } from "./ProjectsDetails";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const projectsPerPage = 8;

  // Helper function: عداد المشاريع حسب الكاتيجوري
  const countByCategory = (cat) =>
    projects.filter((p) => p.category === cat).length;

  // فلترة المشاريع حسب التاب النشط
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Pagination
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <section className="projects" id="projects">
      <header>
        <h1>
          My <span>Projects</span>
        </h1>
        <p className="overview">A showcase of my work across web development</p>
      </header>

      {/* Tabs */}
      <div className="buttons-selection">
        <ul className="flex-wrap">
          <li
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => {
              setActiveCategory("All");
              setPage(1);
            }}
          >
            All Projects ({projects.length})
          </li>

          <li
            className={activeCategory === "React.js" ? "active" : ""}
            onClick={() => {
              setActiveCategory("React.js");
              setPage(1);
            }}
          >
            React.js ({countByCategory("React.js")})
          </li>

          <li
            className={activeCategory === "JavaScript" ? "active" : ""}
            onClick={() => {
              setActiveCategory("JavaScript");
              setPage(1);
            }}
          >
            JavaScript ({countByCategory("JavaScript")})
          </li>

          <li
            className={activeCategory === "HTML, CSS" ? "active" : ""}
            onClick={() => {
              setActiveCategory("HTML, CSS");
              setPage(1);
            }}
          >
            HTML & CSS ({countByCategory("HTML, CSS")})
          </li>
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="row row-gap-4">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0"
          >
            <div className="card mb-3">
              <img src={project.pic} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.name}</h5>

                <p className="card-text">{project.description}</p>
                <p className="about">{project.category}</p>

                <div className="card-footer-content mt-auto">
                  <div className="d-flex gap-1 flex-wrap mb-2">
                    {project.technologies.map((tec, i) => (
                      <p key={i} className="tech flex-grow-1">
                        {tec}
                      </p>
                    ))}
                  </div>

                  <div className="d-flex gap-1">
                    {project.LiveLink && (
                      <a
                        href={project.LiveLink}
                        target="_blank"
                        className="btn btn-primary flex-grow-1"
                      >
                        Live
                      </a>
                    )}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="btn btn-primary flex-grow-1"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredProjects.length > projectsPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              count={pageCount}
              page={page}
              onChange={(e, value) => setPage(value)}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "var(--body-color)",
                },
                "& .Mui-selected": {
                  backgroundColor: "var(--small-bg-color)",
                },
                "& .Mui-selected:hover": {
                  backgroundColor: "var(--scrollbar-color)",
                },
              }}
              color="primary"
              shape="rounded"
            />
          </div>
        )}
      </div>
    </section>
  );
}
