import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import GFG from "../../img/gfg.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shivani059mca22@igdtuw.ac.in</span>
        <div className="f-icons">
        <a href="https://github.com/Sheeevani"><img src={Github} alt="" /></a>
          <a href="http://www.linkedin.com/in/shivani-gangwar"><img src={Linkedin} alt="" /></a>
          <a href="https://auth.geeksforgeeks.org/user/sheeevani54"><img src={GFG} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
