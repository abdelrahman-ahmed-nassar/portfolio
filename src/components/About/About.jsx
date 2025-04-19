import classes from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle";

import pic from "../../assets/images/special.jpg";

const About = () => {
  return (
    <section className={classes["about"]}>
      <SectionTitle>about me</SectionTitle>
      <div className={classes["about__container"]}>
        <div className={classes["about__text-box"]}>
          <div>
            <p className={classes["about__paragraph"]}>
              I&apos;m a full stack web developer and software engineering
              student with a strong passion for building clean, fast, and
              scalable web apps.
            </p>
            <p className={classes["about__paragraph"]}>
              I started coding before college and now specialize in the MERN
              stack, working across both frontend and backend. As a freelancer,
              I help clients turn ideas into functional, user-friendly websites.
            </p>
            <p className={classes["about__paragraph"]}>
              I&apos;m also active in competitive programming, constantly
              sharpening my problem-solving skills. Always learning, always
              building—let&apos;s create something awesome.
            </p>
          </div>
        </div>
        <div className={classes["about__img-box"]}>
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
