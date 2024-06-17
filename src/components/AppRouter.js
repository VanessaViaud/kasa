import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import FicheLogement from "../pages/FicheLogement";
import Erreur from "../pages/Erreur";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/fichelogement" element={<FicheLogement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
