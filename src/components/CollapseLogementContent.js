import React from "react";
import CollapseLogement from "../components/CollapseLogement";

function CollapseLogementContent({ logement }) {
  if (!logement) {
    return <div>Logement not found</div>;
  }

  return (
    <div className="collapse-logement__container">
      <CollapseLogement title="Description">
        <p className="collapse-logement__content--text">
          {logement.description}
        </p>
      </CollapseLogement>
      <CollapseLogement title="Equipements">
        <ul className="collapse-logement__content--text">
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </CollapseLogement>
    </div>
  );
}

export default CollapseLogementContent;