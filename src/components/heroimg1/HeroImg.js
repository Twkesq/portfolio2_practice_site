import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
import "../../index.css";
import 'animate.css';
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    </div>
    <div className="content">
        <p className="animate__animated animate__fadeInDown  animate__delay-1s animate__slow">HI! I'm Freelancer.</p>
        <h1 className="animate__animated animate__fadeInDown  animate__delay-1s animate__slow">Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

    </div>
  </div>;
};

export default HeroImg;
