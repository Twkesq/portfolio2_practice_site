import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import 'animate.css';
import Typed from 'react-typed';

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    </div>
    <div className="content">
        <p className="animate__animated animate__fadeInDown  animate__delay-1s animate__slow">HI! I'm Freelancer.</p>
        <h1><Typed strings={["Frontend Developer"]} typeSpeed={120}/></h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

    </div>
  </div>;
};

export default HeroImg;
