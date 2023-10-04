import React from "react";
import { HeroButtons } from "../../lib/HeroButtons";
import LongParagraph from "../ReusableComponents/LongParagraph";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <div className="hero-component-container">
      <div className="hero-container-left">
        <h1 className="hero-primary-headline">
          providing
          <br />
          best
        </h1>
        <h1 className="hero-secondary-headline">WEB Services</h1>
       
          
        <LongParagraph styles='hero-para' text="Letter of on become he tended active enable to. Vicinity
        relation sensible socialbe surprise screened no up as." />
        <div className="hero-btns">
          {HeroButtons.map(({ id, name, type }) => {
            return (
              <button key={id} className={`btn ${type}`}>
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="hero-container-right"></div>
    </div>
  );
};

export default HeroComponent;
