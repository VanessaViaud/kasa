import React from "react";
import Banner from "../components/Banner";
import CollapseContent from "../components/CollapseContent";
import Mountain from "../assets/Banner_2.png";
const About = () => {
  return (
    <div>
      <Banner
        className="banner"
        img={Mountain}
        title="Montagnes"
        classimg="banner__img banner__img--mountain"
        classtext="banner__text"
      />
      <CollapseContent />
    </div>
  );
};

export default About;
