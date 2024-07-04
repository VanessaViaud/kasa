import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../components/LogementDetails.scss";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import LogementDetails from "../components/LogementDetails";

function Logement() {
  const { id } = useParams();

  const logement = logementsData.find((item) => item.id === id);

  return (
    <div>
      <Slideshow slides={logement.pictures} />
      <LogementDetails />
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
