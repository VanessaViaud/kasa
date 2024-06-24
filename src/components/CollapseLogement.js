import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/CollapseLogement.scss";

function CollapseLogement({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-logement">
      <button className="collapse-logement__button" onClick={toggleCollapse}>
        <span className="collapse-logement__title">{title}</span>
        <FontAwesomeIcon
          icon="angle-up"
          className={`collapse-logement__arrow ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && (
        <div className={`collapse-logement__content ${isOpen ? "open" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapseLogement;
