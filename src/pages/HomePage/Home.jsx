import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import "./Home.scss";
import TIMELINE from "../../assets/images/map.svg";
import PRIZE from "../../assets/images/prize.svg";
import Sponsors from "../../components/sponsors/Sponsors";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home-page">
      <Nav data-scroll />
      <Hero data-scroll />
      <div className="main-sec" data-scroll>
        <About />
        <div className="timeline" data-scroll>
          <img src={TIMELINE} alt="" />
        </div>
      </div>
      <div className="bottom-sec">
        <div className="prize-sec">
          <div className="prize-pool">
            <img src={PRIZE} alt="" />
            30K Prize Pool
          </div>
          <div className="prizes">
            <div className="prize">
              <div className="prize-name">1st Prize</div>
              <div className="prize-amt">20,000</div>
            </div>
            <div className="prize">
              <div className="prize-name">2nd Prize</div>
              <div className="prize-amt">2,500 x 4</div>
            </div>
          </div>
        </div>
        <Sponsors />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
