import React from "react";
import imgBanner1 from "../assets/Banner_1.png";
import "../styles/Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <img src={imgBanner1} alt="Falaises" className="banner__img" />
      <p className="banner__text">Chez vous, partour et ailleurs</p>
    </div>
  );
};

export default Banner;
