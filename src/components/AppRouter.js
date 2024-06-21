import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import PageLogement from "../pages/PageLogement";
import Erreur from "../pages/Erreur";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/pagelogement" element={<PageLogement />} />
          <Route path="/logements/:id" element={<PageLogement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
