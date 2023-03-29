import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
import "../../index.css"
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img src={IntroImg} className="into-img" alt="intro"/>
    </div>
    <div className="content">
        <p>HI! I'm Freelancer.</p>
        <h1>Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

    </div>
  </div>;
};

export default HeroImg;
