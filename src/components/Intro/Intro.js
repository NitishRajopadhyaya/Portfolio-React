import { Link } from "react-scroll";
import SelfImage from "../../assets/Nitish.png";
import CV from "../../assets/cv.png";
import HireMe from "../../assets/hireme.png";
import "./Intro.css";
const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Nitish</span>
          <br />
          Backend Developer
        </span>
        <p className="introPara">
          I am skilled backend developer with experience in creating <br /> API
          and Database
        </p>
        <div className="buttons">
          <Link to="">
            <button className="btn">
              <img src={HireMe} className="btnImg" alt="HireMe" />
              Hire Me
            </button>
          </Link>
          <button className="btn">
            <img src={CV} className="btnImg" alt="cv" />
            Resume
          </button>
        </div>
      </div>
      <img src={SelfImage} alt="Profile" className="bg" />
    </section>
  );
};

export default intro;
