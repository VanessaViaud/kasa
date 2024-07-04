import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../components/LogementDetails.scss";
import StarRating from "../components/StarRating";

function LogementDetails() {
  const { id } = useParams();

  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      <div className="fiche-logement">
        <div className="fiche-logement__left">
          <h1 className="fiche-logement__title">{logement.title}</h1>
          <p className="fiche-logement__location">{logement.location}</p>
          <div className="fiche-logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="fiche-logement__tags__ind">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="fiche-logement__right">
          <div className="fiche-logement__host">
            <p className="fiche-logement__host__name">{logement.host.name}</p>
            <img
              className="fiche-logement__host__picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="fiche-logement__rating">
            <StarRating rating={logement.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogementDetails;
