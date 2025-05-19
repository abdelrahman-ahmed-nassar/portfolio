import React from "react";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import { useEffect, useState } from "react";

import "./Hero.scss";

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

const useTypeSuperPower = (
  superpowers: string[]
): {
  typedSuperpower: string;
  selectedSuperpower: string;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedSuperpower, setTypedSuperpower] = useState("");

  // effect
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedSuperPower = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length + 1
        );

        if (nextTypedSuperPower === typedSuperpower) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextTypedSuperPower);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!typedSuperpower) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [superpowers, typedSuperpower, phase, selectedIndex]);

  return { typedSuperpower, selectedSuperpower: superpowers[selectedIndex] };
};

const superpowers = [
  "Abdelrahman Nassar",
  "A full stack web developer",
  "A self thought programmer",
];

const Hero = () => {
  const { typedSuperpower, selectedSuperpower } =
    useTypeSuperPower(superpowers);

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div
          className="hero__text-wrapper"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="hero__title" data-aos="fade-up" data-aos-delay="400">
            We develop websites that ignite your business.
          </h1>
          <div className="hero__text" data-aos="fade-up" data-aos-delay="600">
            <p>
              I'm{" "}
              <span className="blinking-cursor" aria-label={selectedSuperpower}>
                {typedSuperpower}
              </span>
            </p>
          </div>

          <a
            className="hero__button"
            href="#about"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Learn More
          </a>
        </div>
        <BackgroundAnimation
          className="hero__bgc"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Hero;
