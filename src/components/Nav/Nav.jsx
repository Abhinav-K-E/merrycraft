import React from "react";
import "./Nav.scss";

import MULOGO from "../../assets/logos/mu.svg";
import ILLU from "../../assets/logos/illu.svg";
import DEV from "../../assets/logos/mulearn-campus.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={MULOGO} alt="" className="logo" />
      <img src={ILLU} alt="" className="logo" />
      <img src={DEV} alt="" className="logo" />
    </nav>
  );
};

export default Nav;
