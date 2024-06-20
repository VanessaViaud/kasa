import React from "react";
import logoFooter from "../assets/LOGO_footer.png";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
