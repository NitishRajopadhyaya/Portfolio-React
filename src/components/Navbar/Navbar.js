import Nlogo from "../../assets/NL.png";
import "./Navbar.css";

import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar">
        <img src={Nlogo} className="logo" alt="Logo" />
        <div className="desktopMenu">
          {/* to ma chahi id hunu parcha  */}
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            to="Works"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
          <Link
            to="client"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Experience
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document.getElementById("contact").scrollIntoView();
          }}
        >
          <img src={contactImg} className="desktopMenuImg" alt="" />
          Contact Me
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
