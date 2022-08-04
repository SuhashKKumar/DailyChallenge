import React from "react";
import { SiSurveymonkey } from "react-icons/si";
import "../styles/Navbar.css";

const Navbar = ({navbar}) => {
  
  
  return (
    
    <div className={navbar?'navbar navbar_bg':'navbar'}>
    <div className="sub_navbar" >
    <h1  className="navbar_title">Expressso</h1>
    <SiSurveymonkey className="logo" />
      </div>
      <ul>
        <li>
          <a href="#"> Home </a>
          </li>
          <li>
          <a href="#"> About Us </a>
          </li>
          <li>
          <a href="#"> Services </a>
          </li>
          <li>
          <a href="#"> Contact Us </a>
        </li>
      </ul>
      </div>
      
  );
};

export default Navbar;
