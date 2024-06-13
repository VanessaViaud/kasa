import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import FicheLogement from "../pages/FicheLogement";
import Erreur from "../pages/Erreur";
import Header from "./Header";
import "../styles/Header.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<FicheLogement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
