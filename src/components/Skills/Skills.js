import DBB from "../../assets/DBB.png";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </span>
      <div className="skillsBars">
        <div className="skillbar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebApp Development</h2>
            <p>This is a demo text , you can write yooour own content</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>API development</h2>
            <p>This is a demo text , you can write yooour own content</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={DBB} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>DataBase Management</h2>
            <p>This is a demo text , you can write yooour own content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
