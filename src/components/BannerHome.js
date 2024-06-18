import React from "react";
import imgBanner1 from "../assets/Banner_1.png";
import "../styles/Banner.scss";
const BannerHome = () => {
  return (
    <div className="banner">
      <img src={imgBanner1} alt="Falaises" className="banner__img cliff" />
      <p className="banner__text">Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BannerHome;
