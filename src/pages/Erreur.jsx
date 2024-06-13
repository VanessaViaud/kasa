import React from "react";
import { useRouteError } from "react-router-dom";

function Erreur() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="#"></a>
    </div>
  );
}

export default Erreur;
