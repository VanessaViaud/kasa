import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../styles/Card.scss";

function Card() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div>
      <ul className="card">
        {logements.map((logement) => (
          <li className="card__item" key={logement.id}>
            <Link to={`/logements/${logement.id}`}>
              {" "}
              {/* Mettre à jour le chemin */}
              <img
                className="card__img"
                src={logement.cover}
                alt={logement.title}
              />
              <div className="card__title--container">
                <p className="card__title">{logement.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
