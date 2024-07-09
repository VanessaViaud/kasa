import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../datas/about.json";
import { useNavigate } from "react-router-dom";
import "../components/Collapse.scss";

function Collapse({ classContainer, logement, visibleSection }) {
  const [openIndices, setOpenIndices] = useState([]);
  const navigate = useNavigate();

  if (!logement && visibleSection !== "about") {
    navigate("/error");
    return null;
  }

  const toggleCollapse = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const logementSections = [
    {
      title: "Description",
      content: (
        <p className="collapse__content--text">{logement?.description}</p>
      ),
    },
    {
      title: "Equipements",
      content: (
        <ul className="collapse__content--text">
          {logement?.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ];

  const aboutSections = data.map((item, index) => ({
    title: item.title,
    content: <p className="collapse__content--text">{item.content}</p>,
  }));

  const renderSections = (sections) => {
    return sections.map((section, index) => (
      <div className="collapse" key={index}>
        <button
          className="collapse__button"
          onClick={() => toggleCollapse(index)}
        >
          <span className="collapse__title">{section.title}</span>
          <FontAwesomeIcon
            icon="angle-up"
            className={`collapse__arrow ${
              openIndices.includes(index) ? "open" : ""
            }`}
          />
        </button>
        <div
          className={`collapse__content ${
            openIndices.includes(index) ? "open" : "close"
          }`}
        >
          {section.content}
        </div>
      </div>
    ));
  };

  return (
    <div>
      {visibleSection === "logement" && (
        <div className={classContainer}>{renderSections(logementSections)}</div>
      )}
      {visibleSection === "about" && (
        <div className={classContainer}>{renderSections(aboutSections)}</div>
      )}
    </div>
  );
}

export default Collapse;
