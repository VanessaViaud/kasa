import React from "react";
import { Link } from "react-router-dom";
import "../components/Error.scss";
function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <div className="error-page__text">
        <p>Oups! La page que</p>
        <p>vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
}

export default Error;
