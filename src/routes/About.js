import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg2/HeroImg2";
import AboutContent from "../components/aboutcontent/AboutContent";
const About = () => {
  return <div>
    
    <Navbar/>
    <HeroImg2 title={"About"}  subtitle={"I'm a friendly frontend developer"}/>
    <AboutContent/>
    <Footer/>
  </div>;
};

export default About;
