import "./FooterStyles.css";
import React from "react";
import { FaHome , FaPhone , FaMailBulk, FaFacebook, FaGithub, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      
        <div className="left">
              <div className="location">
                  <FaHome style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  <div><p>Street Bandery 10</p> <p>Ukraine</p></div>
              </div>
              <div className="number">
                  <h4><FaPhone style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  +380 93 024 8947s</h4>
              </div>

              <div className="email">
                  <h4><FaMailBulk style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  twkesqolek@gmail.com</h4>
              </div>         
        </div>

        <div className="right">
              <h4>About the company</h4>
              <p>Now I am not in any company</p>

              <div className="social">
              <FaFacebook style={{color:"#fff" , marginRight:"1rem"}} size={30}/>
              <FaTwitter style={{color:"#fff" , marginRight:"1rem"}} size={30}/>
              <FaGithub style={{color:"#fff" , marginRight:"1rem"}} size={30}/>
              </div>
        </div>

    </div>
  </div>;
};

export default Footer;
