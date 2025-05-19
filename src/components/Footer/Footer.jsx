import "./Footer.scss";
import footerLogo from "../../assets/logos/footer-logo1.svg";
import {
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div 
            className="logo"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img src={footerLogo} alt="logo" />
          </div>

          <div className="down-below">
            <ul 
              className="links"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li>
                <a
                  href="https://github.com/abdelrahman-ahmed-nassar/"
                  title="Abdelrahman on GitHub"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsGithub className="fa" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-ahmed-nassar/"
                  rel="noreferrer"
                  title="Abdelrahman on LinkedIn"
                  target="_blank"
                >
                  <BsLinkedin className="fa" />
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/abdelrahman_ahmed_nassar"
                  rel="noreferrer"
                  title="Abdelrahman on Telegram"
                  target="_blank"
                >
                  <BsTelegram className="fa" />
                </a>
              </li>
            </ul>

            <a 
              type="button" 
              className="to-top" 
              href="#"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <BsFillArrowUpCircleFill className="fa fa-arrow-up" />
            </a>

            <p 
              className="copy-right"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {`made with 💖 by abdelrahman Nassar @${new Date().getFullYear()} all rights reserved`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
