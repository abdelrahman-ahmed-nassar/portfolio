import classes from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle";

import pic from "../../assets/images/special.png";

const About = () => {
  return (
    <section className={classes["about"]}>
      <SectionTitle>about me</SectionTitle>
      <div className={classes["about__container"]}>
        <div className={classes["about__text-box"]}>
          <div>
            <p className={classes["about__paragraph"]}>
              Hello! My name is Abdelrahman Ahmed. I am a Software engineer
              student who is passionate about programming in general and
              especially web development.
            </p>
            <p className={classes["about__paragraph"]}>
              In the summer of 2022, I participated in a contest called{" "}
              <a
                href={
                  "https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/"
                }
                className={classes["about__link"]}
              >
                &#34;Kalbonian Almarsos&#34;
              </a>{" "}
              which gave me a roadmap to follow to become a good software
              developer.
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
