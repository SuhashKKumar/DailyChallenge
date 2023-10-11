import React from "react";
import "./PricingContainer.css";
import { PircingData } from "../../lib/PricingData";

const PricingContainer = () => {
  return (
    <div className="pricing-container">
      <h1 className="service-headline">
        Our <span className="service-headline-span">Pricing Plan</span>
      </h1>
      <div className="price-card-container">
        {PircingData.map(({ id, planName, price, features, buttonName }) => {
          return (
            <div key={id} className="price-card">
              <h2 className="price-plan">{planName}</h2>
              <h1 className="price-price"> {price} </h1>
              {features.map(({ id, feature }) => {
                return (
                  <li key={id} className="price-feature">
                    {feature}
                  </li>
                );
              })}
              <button className="btn secondary-btn price-btn">
                {buttonName}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingContainer;
