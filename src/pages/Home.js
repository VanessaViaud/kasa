import React from "react";
import Banner from "../components/Banner.js";
import Card from "../components/Card.js";
import Cliff from "../assets/Banner_1.png";

const Home = () => {
  return (
    <div>
      <Banner
        className="banner"
        img={Cliff}
        title="Falaises"
        text="Chez vous, partout et ailleurs"
        classimg="banner__img banner__img--cliff"
        classtext="banner__text"
      />
      <Card />
    </div>
  );
};

export default Home;
