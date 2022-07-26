import React from "react";
import SizeButtons from "./SizeButtons";

const RightContainer = ({transform, setTransform}) => {
    const price='$199.9'
  return (
    <div onMouseEnter={()=>{
      setTransform(true)
    }} onMouseLeave={()=>{
      setTransform(false)
    }} className={transform?'right_container_after':'right_container_before'} >
      <h1> NIKE AIR MAX</h1>
      <h4>Men's Shoe</h4>
      <h2>Product Details</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old
      </p>
      <SizeButtons/>
      <div className="price_container" >
        <h2>{price}</h2>
        <button className=" button primary_button" >Buy Now</button>
      </div>
      </div>
  );
};

export default RightContainer;
