import React from "react";
import LongParagraph from "../ReusableComponents/LongParagraph";
import ServiceCards from "../ServiceCards/ServiceCards";
import "./ServicesContainer.css";

const ServicesContainer = () => {
  return (
    <div className="service-container">
      <h1 className="service-headline">
        Best <span className="service-headline-span">Services</span>
      </h1>
      <LongParagraph
        styles="service-paragraph"
        text="Letter of on become he tended active enable to. Vicinity relation
      sensible sociable surprise screened no up as."
      />
      <ServiceCards />
      <button className="btn secondary-btn">Explore All</button>
    </div>
  );
};

export default ServicesContainer;
