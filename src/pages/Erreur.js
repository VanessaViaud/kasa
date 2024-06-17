import React from "react";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
