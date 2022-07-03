import React from "react";
import "../css/Logo.css";
import logo from "../images/freecodecamp-logo.png";

function Logo() {
  return (
    <div className="fccLogoContainer">
      <img src={logo} className="logo" alt="Logo" />
    </div>
  );
}

export default Logo;
