import React, { useState } from "react";
import "../components/Logement.scss";

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
      <div className="slideshow__img">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="slideshow__nav">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Slideshow;
