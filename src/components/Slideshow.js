import React, { useState } from "react";
import "../components/Slideshow.scss";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";

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
              <Icon
                className="slideshow__nav--desktop"
                path={mdiChevronLeft}
                size={5}
              />
              <Icon
                className="slideshow__nav--mobil"
                path={mdiChevronLeft}
                size={1.5}
              />
            </button>
            <button onClick={nextSlide}>
              <Icon
                className="slideshow__nav--desktop"
                path={mdiChevronRight}
                size={5}
              />
              <Icon
                className="slideshow__nav--mobil"
                path={mdiChevronRight}
                size={1.5}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
