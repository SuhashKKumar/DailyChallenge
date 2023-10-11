import React from "react";
import "./TestimonialContainer.css";

const TestimonialContainer = ({clientDetails}) => {
  
  return (
    <div className="testimonial-container">
      <img src={clientDetails.image} width='800' alt="this is client" />
      <div className="testimonial-client-details">
        <h3 className="testimonial-title">{clientDetails.title}</h3>
        <p className="testimonial-details">
          {clientDetails.description}
        </p>
        <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
        <h4 className="testimonial-client">{clientDetails.client}</h4>
        <h5 className="testimonial-designation">{clientDetails.designation}</h5>
      </div>
    </div>
  );
};

export default TestimonialContainer;
