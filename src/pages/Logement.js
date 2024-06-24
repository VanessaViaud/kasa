import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../components/Logement.scss";
import CollapseLogementContent from "../components/CollapseLogementContent";
import Slideshow from "../components/Slideshow";

function Logement() {
  const { id } = useParams();

  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      <Slideshow slides={logement.pictures} />
      <div className="fiche-logement">
        <h1 className="fiche-logement__title">{logement.title}</h1>
        <p className="fiche-logement__location">{logement.location}</p>
        <p className="fiche-logement__tags">{logement.tags}</p>
      </div>
      <CollapseLogementContent logement={logement} />
    </div>
  );
}

export default Logement;
