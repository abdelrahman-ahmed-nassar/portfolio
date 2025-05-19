import classes from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle";

import pic from "../../assets/images/special.jpg";

const About = () => {
  return (
    <section className={classes["about"]} id="about">
      <SectionTitle data-aos="fade-up">about me</SectionTitle>
      <div className={classes["about__container"]}>
        <div className={classes["about__text-box"]} data-aos="fade-right" data-aos-delay="200">
          <div>
            <p className={classes["about__paragraph"]} data-aos="fade-up" data-aos-delay="300">
              I&apos;m a full stack web developer and software engineering
              student with a strong passion for building clean, fast, and
              scalable web apps.
            </p>
            <p className={classes["about__paragraph"]} data-aos="fade-up" data-aos-delay="400">
              I started coding before college and now specialize in the MERN
              stack, working across both frontend and backend. As a freelancer,
              I help clients turn ideas into functional, user-friendly websites.
            </p>
            <p className={classes["about__paragraph"]} data-aos="fade-up" data-aos-delay="500">
              I&apos;m also active in competitive programming, constantly
              sharpening my problem-solving skills. Always learning, always
              building—let&apos;s create something awesome.
            </p>
          </div>
        </div>
        <div className={classes["about__img-box"]} data-aos="fade-left" data-aos-delay="300">
          <div className={classes["img-container"]}>
            <img
              className="img"
              src={pic}
              alt="abdelrahman Nassar"
              title="Abdelrahman Nassar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
