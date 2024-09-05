import "./Projects.scss";
import SectionTitle from "../UI/SectionTitle";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import cvWebsite from "../../assets/projects-images/CV-website.png";
import omnifood from "../../assets/projects-images/Omnifood.png";
import forkify from "../../assets/projects-images/forkify.png";
import pigGame from "../../assets/projects-images/Pig-Game.png";
import bankist from "../../assets/projects-images/Bankist.png";
import bankistWebsite from "../../assets/projects-images/bankist-website.png";
import mapty from "../../assets/projects-images/mapty.png";
import kasper from "../../assets/projects-images/Kasper.png";
import passwords from "../../assets/projects-images/passwords.png";
import leon from "../../assets/projects-images/Leon.png";
import chat from "../../assets/projects-images/chat.png";
import weather from "../../assets/projects-images/weather-app.png";
import sst from "../../assets/projects-images/sst.png";
import productivity from "../../assets/projects-images/productivity-zone.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });

  const isSmallScreen = window.innerWidth < 768;

  console.log(isSmallScreen);

  const works = [
    {
      title: "Forkify",
      description:
        "A recipes website allows you to search over 1,000,000 recipe.",
      projectLink: "https://abdelrahman-forkify.netlify.app/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/forkify/",
      img: forkify,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "omnifood",
      description: "A restaurant website land page has an awesome design",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/omnifood/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/omnifood/",
      img: omnifood,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "Productivity zone",
      description:
        "A lot of useful tools that helps you te be more productive ",
      projectLink:
        "https://abdelrahman-ahmed-nassar.github.io/productivity-zone/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/productivity-zone",
      img: productivity,
      tags: ["React", "ALL"],
    },
    {
      title: "Passwords app",
      description: "A simple app that allows you to manage your passwords",
      projectLink:
        "https://abdelrahman-ahmed-nassar.github.io/passwords-manager-app/",
      codeLink:
        "https://github.com/abdelrahman-ahmed-nassar/passwords-manager-app/",
      img: passwords,
      tags: ["React", "ALL"],
    },
    {
      title: "Bankist",
      description:
        "A simulation for a bank with some interested functionality fake login 'js' '1111'",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist/",
      img: bankist,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "Mapty",
      description: "A simple web application allows you to track your workouts",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/mapty/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/mapty/",
      img: mapty,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "bankist website",
      description: "A simple web application with modern animation",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist-website/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist-website/",
      img: bankistWebsite,
      tags: ["JavaScript", "ALL"],
    },

    {
      title: "pig game",
      description: "A simple game with 2 players",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/pig-game/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/pig-game/",
      img: pigGame,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "Kasper",
      description: "An HTMl & CSS land page template",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/kasper/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/kasper/",
      img: kasper,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "leon",
      description: "An HTMl & CSS land page template",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/leon/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/leon/",
      img: leon,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "CV website",
      description: "A simple website cv with colorful design",
      projectLink: "https://abdelrahman-ahmed-nassar.github.io/CV-website/",
      codeLink: "https://github.com/abdelrahman-ahmed-nassar/CV-website/",
      img: cvWebsite,
      tags: ["HTML & CSS", "ALL"],
    },
  ];

  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") setFilterWork(works);
      else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <Fragment>
      <SectionTitle>projects</SectionTitle>
      <div className="projects">
        <div className="app__work-filter">
          {["All", "React", "JavaScript", "HTML & CSS"].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.img} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={isSmallScreen ? work.projectLink : work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4>{work.title}</h4>
                <p style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Fragment>
  );
};
export default Projects;
