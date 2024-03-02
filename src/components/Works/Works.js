import "./Works.css";
const Works = () => {
  return (
    <section id="Works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </span>
      <div className="worksImgs">
        {/* <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
                <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
                <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
                <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                <img src={Portfolio6} alt="Portfolio6" className="worksImg" /> */}
      </div>
      <button className="worksbtn">see more</button>
    </section>
  );
};

export default Works;
