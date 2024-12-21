import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import "./Home.scss";
import RULESIMG from "../../assets/images/rules.png";
import PRIZE from "../../assets/images/prize.svg";
import CALL from "../../assets/images/call.png";
import QN from "../../assets/images/qn.svg";

import SNOW from '../../assets/images/snow.svg'

const Home = () => {
  const rules = [
    "Align card with the theme.",
    "Use Canva, Figma, or Photoshop.",
    "One card per participant.",
    "Submit via [Airtable Link] (JPEG, PNG, PDF, AI, PSD).",
    "Deadline: [Insert Date].",
  ];
  return (
    <div className="home-page">
      <Nav data-scroll />
      <Hero data-scroll />
      <div className="main-sec" data-scroll>
        <About />
        <div className="guidelines">
          <div className="guide-head">
            <img src={RULESIMG} alt="" className="head-img" />
            Rules & Guidelines
          </div>
          <div className="guide-lines">
            {rules.map((item) => (
              <div className="list">
                <img src={QN} alt="" className="qn" />
                {item}
              </div>
            ))}
          </div>
          <div className="prizee">
            <img className="prize-img" src={PRIZE} alt="" />
          </div>
        </div>
        <div className="guidelines-left">
          <div className="guide-head">
            <img src={CALL} alt="" className="head-img" />
            contact Us
          </div>
          <div className="grp">
            <a href="tel:+919895467969" className="contact-btn">
              Abhinav : 9895467969
            </a>
            <a href="mailto:mulearndevagiri@gmail.com" className="email-btn">
              mulearndevagiri@gmail.com
            </a>
          </div>
          <img src={SNOW} className="snow" alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
