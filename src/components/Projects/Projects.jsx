import "./Projects.scss";
import SectionTitle from "../UI/SectionTitle";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink, FiFolder, FiTag } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

// Import projects data
import { projectsData } from "../../data/projects";

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  if (!url || typeof url !== "string") return null;

  // Remove the @ prefix if present
  const cleanUrl = url.startsWith("@") ? url.substring(1) : url;

  // Handle different YouTube URL formats
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const shortRegExp = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(.+)$/;

  const match = cleanUrl.match(regExp);
  if (match && match[7].length === 11) {
    return match[7];
  }

  // Try to extract from shorts URL or other formats
  const shortMatch = cleanUrl.match(shortRegExp);
  if (shortMatch) {
    const path = shortMatch[4];
    if (path.includes("shorts/")) {
      return path.split("shorts/")[1].split("?")[0];
    }
  }

  return null;
};

// Component for YouTube video embed
const YouTubeEmbed = ({ url, title }) => {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) return <div>Invalid YouTube URL</div>;

  return (
    <div className="youtube-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// Component to display an image with optional video link
const MediaDisplay = ({ img, video, title, className = "", onClick }) => {
  const hasVideo = !!video;

  return (
    <div className={`media-container ${className}`} onClick={onClick}>
      <img src={img} alt={title} />
      {hasVideo && (
        <div className="video-overlay">
          <div className="play-button">
            <FaPlay />
          </div>
        </div>
      )}
    </div>
  );
};

MediaDisplay.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  video: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const projectsRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Get the projects data from the imported data
  const works = useMemo(() => projectsData, []);

  const [filterWork, setFilterWork] = useState(works);

  // Extract unique tags from projects and sort by number of featured projects
  const uniqueTags = useMemo(() => {
    // Get all unique tags
    const allTags = works.flatMap((work) => work.tags);
    const uniqueSet = new Set(allTags);
    const uniqueTagsArray = Array.from(uniqueSet);

    // Count featured projects for each tag
    const tagCounts = uniqueTagsArray.map((tag) => {
      const featuredCount = works.filter(
        (work) => work.featured && work.tags.includes(tag)
      ).length;

      return {
        tag,
        featuredCount,
        totalCount: works.filter((work) => work.tags.includes(tag)).length,
      };
    });

    // Sort by featured count (descending), then by total count if featured counts are equal
    tagCounts.sort((a, b) => {
      if (b.featuredCount !== a.featuredCount) {
        return b.featuredCount - a.featuredCount;
      }
      return b.totalCount - a.totalCount;
    });

    // Extract just the tag names in the sorted order
    const sortedTags = tagCounts.map((item) => item.tag);

    // Add 'All' as the first item
    return ["All", ...sortedTags];
  }, [works]);

  useEffect(() => {
    const handleResize = () => {
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
    setSelectedProject(null);

    setTimeout(() => {
      // Show all projects when 'All' is selected
      if (item.toLowerCase() === "all") {
        setFilterWork(works);
      } else {
        // Only show projects with the selected tag
        setFilterWork(
          works.filter((work) =>
            work.tags.some((tag) => tag.toLowerCase() === item.toLowerCase())
          )
        );
      }
    }, 500);
  };

  const handleCardHover = (index, isHovering) => {
    setHoveredCard(isHovering ? index : null);
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsPlayingVideo(false);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setIsPlayingVideo(false);
    document.body.style.overflow = "auto";
  };

  const toggleVideoPlayback = () => {
    setIsPlayingVideo((prevState) => !prevState);
  };

  return (
    <Fragment>
      <section className="projects-section">
        <SectionTitle>My Portfolio</SectionTitle>

        <div className="projects-container">
          {/* Filter tabs */}
          <div className="filter-container">
            <div className="filter-tabs">
              {uniqueTags.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`filter-tab ${
                    activeFilter === item ? "active" : ""
                  }`}
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
                      key={index}
                      onClick={() => openProjectDetail(work)}
                    >
                      <div className="featured-image">
                        <MediaDisplay
                          img={work.img}
                          video={work.video}
                          title={work.title}
                        />
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
                        <p>{work.summary}</p>
                        <div className="featured-links">
                          {work.projectLink && (
                            <a
                              href={work.projectLink}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink /> Live Demo
                            </a>
                          )}
                          {work.codeLink && (
                            <a
                              href={work.codeLink}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <AiFillGithub /> Source Code
                            </a>
                          )}
                          {!work.projectLink && work.video && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openProjectDetail(work);
                                setTimeout(() => toggleVideoPlayback(), 100);
                              }}
                              className="video-link"
                            >
                              <FaPlay /> Watch Demo
                            </button>
                          )}
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
                      key={index}
                      onMouseEnter={() => handleCardHover(index, true)}
                      onMouseLeave={() => handleCardHover(index, false)}
                      onClick={() => openProjectDetail(work)}
                    >
                      <div className="card-header">
                        <div className="folder-icon">
                          <FiFolder />
                        </div>
                        <div className="card-links">
                          {work.projectLink && (
                            <a
                              href={work.projectLink}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink />
                            </a>
                          )}
                          {work.codeLink && (
                            <a
                              href={work.codeLink}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <AiFillGithub />
                            </a>
                          )}
                          {!work.projectLink && work.video && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openProjectDetail(work);
                                setTimeout(() => toggleVideoPlayback(), 100);
                              }}
                              className="video-icon"
                            >
                              <FaPlay />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="card-content">
                        <h3>{work.title}</h3>
                        <p>{work.summary}</p>
                      </div>
                      <div className="card-footer">
                        <div className="card-tags">
                          <span>{work.tags[0]}</span>
                        </div>
                        <div className="card-year">{work.year}</div>
                      </div>
                      <div
                        className="card-hover-image"
                        style={{ opacity: hoveredCard === index ? 0.15 : 0 }}
                      >
                        <MediaDisplay
                          img={work.img}
                          video={work.video}
                          title={work.title}
                        />
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
                  {isPlayingVideo && selectedProject.video ? (
                    <YouTubeEmbed
                      url={selectedProject.video}
                      title={selectedProject.title}
                    />
                  ) : (
                    <MediaDisplay
                      img={selectedProject.img}
                      video={selectedProject.video}
                      title={selectedProject.title}
                      onClick={
                        selectedProject.video ? toggleVideoPlayback : undefined
                      }
                    />
                  )}
                </div>
                <div className="modal-title">
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-tags">
                    <span className="modal-tag">{selectedProject.tags[0]}</span>
                    <span className="modal-year">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.projectLink && (
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {selectedProject.codeLink && (
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button secondary"
                  >
                    <AiFillGithub /> View Code
                  </a>
                )}
                {!isPlayingVideo && selectedProject.video && (
                  <button
                    onClick={toggleVideoPlayback}
                    className={`modal-button ${
                      !selectedProject.projectLink ? "primary" : "video"
                    }`}
                  >
                    <FaPlay /> Watch{" "}
                    {!selectedProject.projectLink ? "Demo" : "Video"}
                  </button>
                )}
              </div>

              <div className="modal-body">
                <div className="modal-description markdown-content">
                  <ReactMarkdown>{selectedProject.description}</ReactMarkdown>
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
