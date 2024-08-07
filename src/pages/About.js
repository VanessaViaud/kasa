import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Mountain from "../assets/Banner_2.png";

function About() {
  return (
    <div>
      <Banner
        className="banner"
        img={Mountain}
        title="Montagnes"
        classimg="banner__img banner__img--mountain"
        classtext="banner__text"
      />
      <Collapse classContainer="collapse__container" visibleSection="about" />{" "}
    </div>
  );
}

export default About;
