import Azure from "../../assets/Azure.png";
import CSS from "../../assets/CSS.png";
import Csharp from "../../assets/Csharp.png";
import DB from "../../assets/DB.png";
import EFCore from "../../assets/EFCore.png";
import Git from "../../assets/Git.png";
import HTML from "../../assets/HTML.png";
import NET from "../../assets/NET.png";
import VStudio from "../../assets/VStudio.png";
import code from "../../assets/code.png";
import python from "../../assets/python.png";
import "./Clients.css";

const Clients = () => {
  return (
    <section id="client">
      <h2 className="clientTitle">Experience</h2>
      {/* <span className="clientDesc">
        I have had the opportunities to work with diverse range of companies.
        Some of the notable companies i have worked with include
      </span> */}
      <div className="clientImgs">
        {/* <img src={WalMart} alt="WalMart" className="clientimg" /> */}
        {/* <img src={Adobe} alt="Adobe" className="clientimg" />
        <img src={Microsoft} alt="Microsoft" className="clientimg" />
        <img src={Facebook} alt="Facebook" className="clientimg" /> */}
        <img src={Csharp} alt="Csharp" className="skillsImg" />
        <img src={DB} alt="Csharp" className="skillsImg" />
        <img src={HTML} alt="Csharp" className="skillsImg" />
        <img src={NET} alt="Csharp" className="skillsImg" />
        <img src={python} alt="Csharp" className="skillsImg" />
        <img src={CSS} alt="Csharp" className="skillsImg" />
        <img src={Azure} alt="Csharp" className="skillsImg" />
        <img src={Git} alt="Csharp" className="skillsImg" />
        <img src={EFCore} alt="Csharp" className="skillsImg" />
        <img src={VStudio} alt="Csharp" className="skillsImg" />
        <img src={code} alt="Csharp" className="skillsImg" />
      </div>
    </section>
  );
};

export default Clients;
