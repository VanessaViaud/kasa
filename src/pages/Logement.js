// Logement.js
import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../components/Logement.scss";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import StarRating from "../components/StarRating";

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
        <p className="fiche-logement__host">{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
        <div className="fiche-logement__rating">
          <StarRating rating={logement.rating} />
        </div>
      </div>
      <Collapse
        classGen="collapse-logement"
        classContainer="collapse-logement__container"
        logement={logement}
        visibleSection="logement"
      />
    </div>
  );
}

export default Logement;
