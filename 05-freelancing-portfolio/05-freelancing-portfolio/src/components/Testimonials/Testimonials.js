import React, { useState } from "react";
import LongParagraph from "../ReusableComponents/LongParagraph";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";
import { TestimonialData } from "../../lib/TestimonialData";
import "./Testimonials.css";

const Testimonials = () => {
  const [counter, setCounter] = useState(0);
  const decreaseCount = () => {
    counter <= 0
      ? setCounter(TestimonialData.length - 1)
      : setCounter((draft) => draft - 1);
  };
  const increaseCount = () => {
    counter >= TestimonialData.length - 1
      ? setCounter(0)
      : setCounter((draft) => draft + 1);
  };
  return (
    <div className="service-container">
      <h1 className="service-headline">
        What <span className="service-headline-span">Clients</span> Say
      </h1>
      <LongParagraph
        styles="service-paragraph"
        text="Letter of on become he tended active enable to. Vicinity relation
sensible sociable surprise screened no up as."
      />
      <TestimonialContainer clientDetails={TestimonialData[counter]} />
      <div className="testimonial-btns">
        <button
          onClick={decreaseCount}
          className=" btn secondary-btn testimonial-btn "
        >
          {"<"}
        </button>
        <button
          onClick={increaseCount}
          className=" btn secondary-btn testimonial-btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
