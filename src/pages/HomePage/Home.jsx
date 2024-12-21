import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import "./Home.scss";
import RULESIMG from '../../assets/images/rules.png'
import PRIZE from '../../assets/images/prize.svg'
import CALL from '../../assets/images/call.png'

const Home = () => {
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
          <div className="prizee">
            <img className="prize-img" src={PRIZE} alt="" />
          </div>
        </div>
        <div className="guidelines-left">
          <div className="guide-head">
            <img src={CALL} alt="" className="head-img" />
            contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
