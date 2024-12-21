import React from "react";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HERO from "../../assets/images/hero.svg";
const Hero = () => {
  //gsap
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-txt",
      {
        scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        ease: "back.inOut",
        duration: 0.5,
      }
    );
    tl.fromTo(
      [".hero-img", ".hero-btn"],
      {
        y: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        ease: "back.inOut",
        duration: 0.5,
      }
    );
  });
  return (
    <div className="hero" data-scroll data-scroll-speed="0.1">
      <div className="img-container">
        <div className="txt-grp">
          <div className="hero-txt">National Level</div>
          <div className="hero-txt hack-txt">Hackathon</div>
        </div>

        <img className="hero-img" src={HERO} alt="" />
      </div>
      <div className="hero-btn">
        Apply Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={18}
          fill="none"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M14.155 16.845a1.667 1.667 0 0 1 0-2.357l3.822-3.822H2a1.667 1.667 0 0 1 0-3.333h15.977l-3.822-3.821a1.667 1.667 0 1 1 2.357-2.357l6.667 6.666c.65.651.65 1.706 0 2.357l-6.667 6.667c-.65.65-1.706.65-2.357 0"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
