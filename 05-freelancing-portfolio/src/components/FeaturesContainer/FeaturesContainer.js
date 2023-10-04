import React from "react";
import LongParagraph from "../ReusableComponents/LongParagraph";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./FeaturesContainer.css";

const FeaturesContainer = () => {
  return (
    <div className="features-container">
      <h1 className="service-headline">
        Our <span className="service-headline-span">Features</span>
      </h1>
      <LongParagraph
        styles="service-paragraph"
        text="Letter of on become he tended active enable to. Vicinity relation
sensible sociable surprise screened no up as."
      />
      <FeaturesCard />
      <button className="btn secondary-btn">Explore All</button>
    </div>
  );
};

export default FeaturesContainer;
