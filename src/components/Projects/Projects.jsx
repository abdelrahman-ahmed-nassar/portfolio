import "./Projects.scss";
import SectionTitle from "../UI/SectionTitle";
import { Fragment, useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FiExternalLink, FiFolder, FiTag } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Import project images
import omnifood from "../../assets/projects-images/Omnifood.png";
import forkify from "../../assets/projects-images/forkify.png";
import pigGame from "../../assets/projects-images/Pig-Game.png";
import bankist from "../../assets/projects-images/Bankist.png";
import bankistWebsite from "../../assets/projects-images/bankist-website.png";
import mapty from "../../assets/projects-images/mapty.png";
import kasper from "../../assets/projects-images/Kasper.png";
import passwords from "../../assets/projects-images/passwords.png";
import leon from "../../assets/projects-images/Leon.png";
import productivity from "../../assets/projects-images/productivity-zone.png";
import lms from "../../assets/projects-images/lms-project.png";
import sst from "../../assets/projects-images/sst.png";
import weather from "../../assets/projects-images/weather-app.png";
import chat from "../../assets/projects-images/chat.png";
import quotes from "../../assets/projects-images/quotes.png";
import expenses from "../../assets/projects-images/expenses.png";
import cvWebsite from "../../assets/projects-images/CV-website.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    opacity: 1,
  });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const projectsRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const works = [
    {
      id: 1,
      title: "Learning Management System",
      description: "A comprehensive LMS platform for an English teacher with course management and student interaction features.",
      projectLink: "https://abdelrahman-forkify.netlify.app/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/",
      img: lms,
      tags: ["React", "ALL"],
      year: "2023",
      featured: true,
    },
    {
      id: 2,
      title: "Forkify",
      description: "A recipe finder application that allows users to search over 1,000,000 recipes with ingredient adjustments and favorites saving.",
      projectLink: "https://abdelrahman-forkify.netlify.app/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/forkify/",
      img: forkify,
      tags: ["JavaScript", "ALL"],
      year: "2022",
      featured: true,
    },
    {
      id: 3,
      title: "Omnifood",
      description: "A modern restaurant landing page with responsive design, animations, and subscription features.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/omnifood/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/omnifood/",
      img: omnifood,
      tags: ["HTML & CSS", "ALL"],
      year: "2021",
      featured: true,
    },
    {
      id: 4,
      title: "Productivity Zone",
      description: "A suite of productivity tools including task management, pomodoro timer, and note-taking features.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/productivity-zone/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/productivity-zone",
      img: productivity,
      tags: ["React", "ALL"],
      year: "2022",
    },
    {
      id: 5,
      title: "Password Manager",
      description: "Secure password management app with encryption and easy access to stored credentials.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/passwords-manager-app/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/passwords-manager-app/",
      img: passwords,
      tags: ["React", "ALL"],
      year: "2022",
    },
    {
      id: 6,
      title: "Bankist App",
      description: "Banking application simulation with transfer features and transaction history.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist/",
      img: bankist,
      tags: ["JavaScript", "ALL"],
      year: "2021",
    },
    {
      id: 7,
      title: "Mapty",
      description: "Workout tracking application with map integration for visualizing exercise locations.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/mapty/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/mapty/",
      img: mapty,
      tags: ["JavaScript", "ALL"],
      year: "2021",
    },
    {
      id: 8,
      title: "Bankist Website",
      description: "Modern banking website with animations and interactive features.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist-website/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist-website/",
      img: bankistWebsite,
      tags: ["JavaScript", "ALL"],
      year: "2021",
    },
    {
      id: 9,
      title: "Pig Game",
      description: "Interactive dice game for two players with score tracking.",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/pig-game/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/pig-game/",
      img: pigGame,
      tags: ["JavaScript", "ALL"],
      year: "2020",
    },
    {
      id: 10,
      title: "Weather App",
      description: "Real-time weather forecast application with location detection.",
      projectLink: "#",
      codeLink: "#",
      img: weather,
      tags: ["React", "ALL"],
      year: "2022",
    },
    {
      id: 11,
      title: "Expense Tracker",
      description: "Financial management tool for tracking personal expenses and budgeting.",
      projectLink: "#",
      codeLink: "#",
      img: expenses,
      tags: ["React", "ALL"],
      year: "2023",
    },
    {
      id: 12,
      title: "Chat Application",
      description: "Real-time messaging platform with user authentication and chat rooms.",
      projectLink: "#",
      codeLink: "#",
      img: chat,
      tags: ["React", "ALL"],
      year: "2023",
    },
  ];

  const [filterWork, setFilterWork] = useState(works);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      checkScroll();
    };

    const checkScroll = () => {
      if (projectsRef.current) {
        const { scrollWidth, clientWidth } = projectsRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    checkScroll();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (projectsRef.current) {
      const { scrollWidth, clientWidth } = projectsRef.current;
      setShowScrollButtons(scrollWidth > clientWidth);
    }
  }, [filterWork]);

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      projectsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0 });
    setSelectedProject(null);

    setTimeout(() => {
      setAnimateCard({ opacity: 1 });

      if (item === "All") setFilterWork(works);
      else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleCardHover = (index, isHovering) => {
    setHoveredCard(isHovering ? index : null);
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Fragment>
      <section className="projects-section">
        <SectionTitle>My Portfolio</SectionTitle>

        <div className="projects-container">
          {/* Filter tabs */}
          <div className="filter-container">
            <div className="filter-tabs">
              {["All", "React", "JavaScript", "HTML & CSS"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`filter-tab ${activeFilter === item ? "active" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="featured-projects">
            <div className="section-subtitle">
              <span className="highlight">Featured</span> Projects
            </div>
            {filterWork.filter((work) => work.featured).length > 0 ? (
              <div className="featured-grid">
                {filterWork
                  .filter((work) => work.featured)
                  .map((work, index) => (
                    <div
                      className="featured-item"
                      key={work.id}
                      onClick={() => openProjectDetail(work)}
                    >
                      <div className="featured-image">
                        <img src={work.img} alt={work.title} />
                        <div className="featured-overlay">
                          <div className="view-project">
                            <span>View Project</span>
                          </div>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-tag">
                          <FiTag />
                          <span>{work.tags[0]}</span>
                        </div>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                        <div className="featured-links">
                          <a
                            href={work.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                          <a
                            href={work.codeLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <AiFillGithub /> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="no-projects">
                <p>No featured projects in this category</p>
              </div>
            )}
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <div className="section-subtitle">
              <span className="highlight">Other</span> Noteworthy Projects
            </div>

            <div className="projects-scroll-container">
              {showScrollButtons && (
                <button
                  className="scroll-button left"
                  onClick={() => scrollProjects("left")}
                >
                  <HiOutlineChevronLeft />
                </button>
              )}

              <div className="projects-grid" ref={projectsRef}>
                {filterWork
                  .filter((work) => !work.featured)
                  .map((work, index) => (
                    <div
                      className="project-card"
                      key={work.id}
                      onMouseEnter={() => handleCardHover(work.id, true)}
                      onMouseLeave={() => handleCardHover(work.id, false)}
                      onClick={() => openProjectDetail(work)}
                    >
                      <div className="card-header">
                        <div className="folder-icon">
                          <FiFolder />
                        </div>
                        <div className="card-links">
                          <a
                            href={work.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink />
                          </a>
                          <a
                            href={work.codeLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <AiFillGithub />
                          </a>
                        </div>
                      </div>
                      <div className="card-content">
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                      </div>
                      <div className="card-footer">
                        <div className="card-tags">
                          <span>{work.tags[0]}</span>
                        </div>
                        <div className="card-year">{work.year}</div>
                      </div>
                      <div
                        className="card-hover-image"
                        style={{ opacity: hoveredCard === work.id ? 0.15 : 0 }}
                      >
                        <img src={work.img} alt={work.title} />
                      </div>
                    </div>
                  ))}
              </div>

              {showScrollButtons && (
                <button
                  className="scroll-button right"
                  onClick={() => scrollProjects("right")}
                >
                  <HiOutlineChevronRight />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal">
            <div className="modal-overlay" onClick={closeProjectDetail}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={closeProjectDetail}>
                ×
              </button>

              <div className="modal-header">
                <div className="modal-thumbnail">
                  <img src={selectedProject.img} alt={selectedProject.title} />
                </div>
                <div className="modal-title">
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-tags">
                    <span className="modal-tag">{selectedProject.tags[0]}</span>
                    <span className="modal-year">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <p>{selectedProject.description}</p>

                <div className="modal-actions">
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button secondary"
                  >
                    <AiFillGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Projects;
