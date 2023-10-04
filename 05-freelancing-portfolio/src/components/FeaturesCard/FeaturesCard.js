import React from "react";
import { FeaturesCardData } from "../../lib/FeatureCardsData";
import "./FeaturesCard.css";

const FeaturesCard = () => {
  return (
    <div className="feature-card-container">
      {FeaturesCardData.map(
        ({ id, featureName, description, featureButton }) => {
          return (
            <div className="feature-card" key={id}>
              <h4 className="feature-name">{featureName}</h4>
              <p className="feature-descriptio">{description}</p>
              <a className="feature-button" href="#">{featureButton}</a>
            </div>
          );
        }
      )}
      
    </div>
  );
};

export default FeaturesCard;
