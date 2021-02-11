import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import FootLogo from "../../logos/Vera_Ver_White.png";
import FBLogo from "../../logos/facebook-logo.png";
import TwLogo from "../../logos/twitter-logo.png";
import IGLogo from "../../logos/instagram-logo.png";

export default function Footer() {
  return (
    <>
      <div className="footContainer">
        <div className="addressContainer">
          <img
            className="footWordImg"
            src={FootLogo}
            alt="vera footer wordmark"
          />
          <h6 className="veraAddress">
            233 Broadway 12th Floor
            <br />
            New York, NY 10279
          </h6>
        </div>
        <div className="socialContainer">
          <img className="socialLogos" src={FBLogo} alt="facebook link" />
          <img className="socialLogos" src={TwLogo} alt="twitter link" />
          <img className="socialLogos" src={IGLogo} alt="instagram link" />
        </div>
      </div>
    </>
  );
}
