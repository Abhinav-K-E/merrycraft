import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">Hack.dev</div>
      </div>
      <div className="right">
        <div className="nav-trigger">
          <input
            hidden=""
            className="check-icon"
            id="check-icon"
            name="check-icon"
            type="checkbox"
          />
          <label className="icon-menu" htmlFor="check-icon">
            <div className="bar bar--1" />
            {/* <div className="bar bar--2" /> */}
            <div className="bar bar--3" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
