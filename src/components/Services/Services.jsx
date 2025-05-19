import classes from "./Services.module.scss";
import SectionTitle from "../UI/SectionTitle";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import Card from "../UI/Card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className={classes["services"]}>
      <SectionTitle>services</SectionTitle>
      <div className={classes["services__container"]}>
        <div className={classes["services__text-box"]}>
          <p data-aos="fade-up" data-aos-duration="800">
            I know that good development means good business So I keen to make
            consistent, efficient and powerful full-stack websites with fully
            functional and user friendly user interface that will empower your
            business
          </p>
          <a
            href="https://abdelrahman-nassar.notion.site/Abdelrhman-s-resume-3b987f47d3554ec79339a7e897773e1a?pvs=4"
            target="_blank"
            rel="noreferrer"
            className={`${classes["services__button"]}`}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Download CV
          </a>
        </div>
        <div className={classes["services__cards-container"]}>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className={classes["back-end"]}
            style={{
              top: "17.2rem",
              left:
                window.innerWidth < 1050 && window.innerWidth > 991
                  ? "-9rem"
                  : "-7rem",
            }}
          >
            <Card
              emoji={<FcAcceptDatabase fontSize="100px" />}
              heading={"Back-end"}
              detail={
                "I'am a Backend developer with a passion for building server side web applications"
              }
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className={classes["front-end"]}
            style={{
              top: "-16%",
              left: "19.5vw",
            }}
          >
            <Card
              emoji={<FcMultipleDevices fontSize="100px" />}
              heading={"front-end"}
              detail={
                "I'am a frontend developer with a passion for building beautiful and functional web applications"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
