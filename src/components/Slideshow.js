import React, { useState } from "react";
import "../components/Slideshow.scss";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      <img
        className="slideshow__img"
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      {slides.length > 1 && (
        <>
          <div className="slideshow__counter">
            {currentIndex + 1}/{slides.length}
          </div>
          <div className="slideshow__nav">
            <button onClick={prevSlide}>
              <ArrowBackIos id="slideshow__nav--prev" />
            </button>
            <button onClick={nextSlide}>
              <ArrowForwardIos id="slideshow__nav--next" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
