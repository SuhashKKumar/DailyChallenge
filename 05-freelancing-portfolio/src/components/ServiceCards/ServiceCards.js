import React from "react";
import { ServiceCardsData } from "../../lib/ServiceCardsData";
import "./ServiceCards.css";

const ServiceCards = () => {
  return (
    <div className="service-cards-container">
      {ServiceCardsData.map(({ id, name }) => {
        return (
          <div className="service-card-text-container" key={id}>
            <h3>{name}</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;
