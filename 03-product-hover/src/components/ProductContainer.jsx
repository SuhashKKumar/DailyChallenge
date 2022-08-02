import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const ProductContainer = () => {
  
  
  const [transform, setTransform] = useState(false);
    return (
    <div className="container">
      <LeftContainer setTransform={setTransform} transform={transform} />
      <RightContainer setTransform={setTransform} transform={transform} />
    </div>
  );
};

export default ProductContainer;
