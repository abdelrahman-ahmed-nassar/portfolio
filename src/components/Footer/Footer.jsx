import "./Footer.scss";
import footerLogo from "../../assets/logos/footer-logo.svg";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsFillArrowUpCircleFill,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="logo">
            <img src={footerLogo} alt="logo" />
          </div>

          <div className="down-below">
            <ul className="links">
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

            <a type="button" className="to-top" href="#">
              <BsFillArrowUpCircleFill className="fa fa-arrow-up" />
            </a>

            <p className="copy-right">{`made with love by abdelrahman Nassar @${new Date().getFullYear()} all rights reserved`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
