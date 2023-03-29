import "./FooterStyles.css";
import React from "react";
import { FaHome , FaPhone , FaMailBulk, FaFacebook, FaGithub, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      
        <div className="left">
              <div className="location">
                  <FaHome style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  <div><p>123 House Bandery</p> <p>Ukraine</p></div>
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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

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
