import React from "react";
import "../components/Banner.scss";
function Banner({ img, title, text, classimg, classtext }) {
  return (
    <div className="banner">
      <img src={img} alt={title} className={classimg} />
      <p className={classtext}>{text}</p>
    </div>
  );
}

export default Banner;
