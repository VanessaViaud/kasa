import React from "react";
import imgBanner2 from "../assets/Banner_2.png";
import "../styles/Banner.scss";

function BannerAbout() {
  return (
    <div className="banner">
      <img src={imgBanner2} alt="Montagnes" className="banner__img mountain" />
    </div>
  );
}

export default BannerAbout;
