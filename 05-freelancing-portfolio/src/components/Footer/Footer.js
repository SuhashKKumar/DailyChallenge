import React from "react";
import "./Footer.css";
import { FooterData } from "../../lib/FooterData";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-headline">
        People who are ready took these courses!
      </h1>
      <button className="btn secondary-btn footer-btn">Schedule demo</button>
      <div className="footer">
        <div className="footer-left">
          <h1>Payme</h1>
          <h4>
            Crechterwoord K12 182 DK <br />
            Suhash, All Rights Reserve
          </h4>
        </div>
        {
            FooterData.map(({id, header, supportLinks})=>{
                return(
                    <div className="footer-right">
                      <h3> {header} </h3>
                      {
                        supportLinks.map(({id, supportLink})=><h4 key={id} >{supportLink}</h4>)
                      }
                      
                    </div>
                )
            })
        }
      </div>
      <h4>&copy; 2023 Payme. All Rights Reserved</h4>
    </div>
  );
};

export default Footer;
