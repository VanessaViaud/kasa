import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../datas/About.json";
import { useNavigate } from "react-router-dom";
import "../components/Collapse.scss";

function Collapse({ classGen, classContainer, logement, visibleSection }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  if (!logement && visibleSection !== "about") {
    navigate("/error");
    return null;
  }

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
      <div className={classGen} key={index}>
        <button
          className="collapse__button"
          onClick={() => toggleCollapse(index)}
        >
          <span className="collapse__title">{section.title}</span>
          <FontAwesomeIcon
            icon="angle-up"
            className={`collapse__arrow ${openIndex === index ? "open" : ""}`}
          />
        </button>
        {openIndex === index && (
          <div
            className={`collapse__content ${openIndex === index ? "open" : ""}`}
          >
            {section.content}
          </div>
        )}
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
