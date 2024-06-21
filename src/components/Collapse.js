import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <FontAwesomeIcon
          icon="angle-up"
          className={`collapse__arrow ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
