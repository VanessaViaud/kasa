import React from "react";
import "./StarRating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
