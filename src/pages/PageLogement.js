import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../styles/FicheLogements.scss";
import CollapseLogementContent from "../components/CollapseLogementContent";

function PageLogement() {
  const { id } = useParams();

  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      <div className="fiche-logement">
        <img
          className="fiche-logement__img"
          src={logement.cover}
          alt={logement.title}
        />
        <h1 className="fiche-logement__title">{logement.title}</h1>
        <p className="fiche-logement__location">{logement.location}</p>
        <p className="fiche-logement__tags">{logement.tags}</p>
      </div>
      <CollapseLogementContent logement={logement} />
    </div>
  );
}

export default PageLogement;
