import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../datas/logements.json";
import "../components/LogementDetails.scss";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import LogementDetails from "../components/LogementDetails";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logementsData.find((item) => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }
  return (
    <div>
      <Slideshow slides={logement.pictures} />
      <LogementDetails />
      <Collapse
        classContainer="collapse-logement__container"
        logement={logement}
        visibleSection="logement"
      />
    </div>
  );
}

export default Logement;
