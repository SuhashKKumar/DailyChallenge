import React, { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";
import "../styles/projectLayout.css";
const ProjectLayout = () => {
  const [rotateRight, setRotateRight] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(0);
  const [flipVertical, setFlipVertical] = useState(0);

  const ranges={
    brightness:1,
    saturation:1,
    inversion: 0,
    grayscale:1,
  }
  const [range, setRange] = useState(ranges);

  return (
    <div className="project_layout">
      <Controls
        setFlipHorizontal={setFlipHorizontal}
        setFlipVertical={setFlipVertical}
        // setInverse={setInverse}
        setRotateRight={setRotateRight}
        setRange={setRange}
        ranges={ranges}
        range={range}
      />
      <Preview
        range={range}
        // inverse={inverse}
        // rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        flipHorizontal={flipHorizontal}
        flipVertical={flipVertical}
      />
    </div>
  );
};

export default ProjectLayout;
