import React, { useState } from "react";
import {
  TbRotate,
  TbRotateClockwise,
  TbFlipHorizontal,
  TbFlipVertical,
} from "react-icons/tb";
import "../styles/controls.css";
const Controls = ({
  setRotateRight,
  setRange,
  range,
  setFlipVertical,
  setFlipHorizontal,
  ranges,
}) => {
  const filterStyles = {
    fontSize: "4rem",
    color: "#FF0063",
    backgroundColor: "#EAF6F6",
    padding: "0.5rem",
    // transform:'rotate(45deg)'
  };

  const { brightness, grayscale, inversion, saturation } = range;
  const rangeHandler = (e) => {
    const { name, value } = e.target;
    setRange({ ...range, [name]: value });
  };
  const rotateRightHandler = () => {
    setRotateRight((degrees) => {
      if (degrees > 270) {
        return (degrees = 0);
      } else return (degrees += 90);
    });
  };
  const rotateLeftHandler = () => {
    setRotateRight((degrees) => {
      if (degrees > 270) {
        return (degrees = 0);
      } else return (degrees -= 90);
    });
  };
  const flipVerticalHandler = () => {
    setFlipVertical((degrees) => {
      if (degrees > 180) {
        return (degrees = 0);
      } else return (degrees += 180);
    });
  };
  const flipHorizontalHandler = () => {
    setFlipHorizontal((degrees) => {
      if (degrees > 180) {
        return (degrees = 0);
      } else return (degrees += 180);
    });
  };
  const resetHandler = () => {
    setFlipHorizontal(0);
    setFlipVertical(0);
    setRotateRight(0);
    setRange(ranges);
  };
  const [bright, setBright] = useState(true);
  const [saturate, setSaturate] = useState(false);
  const [gray, setGray] = useState(false);
  const [inverse, setInverse] = useState(false);
  const brightHandler = () => {
    setBright(true);
    setSaturate(false);
    setInverse(false);
    setGray(false);
    // console.log(range);
  };
  const saturateHandler = () => {
    setSaturate(true);
    setBright(false);
    setInverse(false);
    setGray(false);
  };

  const inverseHandler = () => {
    setInverse(true);
    setBright(false);
    setSaturate(false);
    setGray(false);
  };
  const grayHandler = () => {
    setGray(true);
    setBright(false);
    setSaturate(false);
    setInverse(false);
  };

  return (
    <div className="controls_container">
      <div className="controls">
        <h2>Filters</h2>
        <div className="buttons">
          <button onClick={brightHandler}>Brightness</button>
          <button onClick={grayHandler}>Contrast</button>
          <button onClick={saturateHandler}>Saturation</button>
          <button onClick={inverseHandler}>Inversion</button>
        </div>
        <label>
          <div className="label_container">
            <h2>
              {saturate
                ? "Saturation"
                : inverse
                ? "Inversion"
                : gray
                ? "Grayscale"
                : "Brightness"}
            </h2>
            <h2>
              {saturate
                ? saturation
                : inverse
                ? inversion
                : gray
                ? grayscale
                : brightness}
            </h2>
          </div>
          {bright ? (
            <input
              className="slider"
              value={brightness}
              onChange={rangeHandler}
              type="range"
              name="brightness"
              min="0"
              step="0.01"
              max="2"
            />
          ) : saturate ? (
            <input
              className="slider"
              value={saturation}
              onChange={rangeHandler}
              type="range"
              name="saturation"
              min="0"
              step="0.01"
              max="2"
            />
          ) : inverse ? (
            <input
              className="slider"
              value={inversion}
              onChange={rangeHandler}
              type="range"
              name="inversion"
              min="0"
              step="0.01"
              max="1"
            />
          ) : (
            <input
              className="slider"
              value={grayscale}
              onChange={rangeHandler}
              type="range"
              name="grayscale"
              min="0"
              step="0.01"
              max="2"
            />
          )}

          <h2>Rotate & Flip</h2>
          <div className="rotate_flip">
            <TbRotate style={filterStyles} onClick={rotateLeftHandler} />
            <TbRotateClockwise
              style={filterStyles}
              onClick={rotateRightHandler}
            />
            <TbFlipVertical
              style={filterStyles}
              onClick={flipVerticalHandler}
            />
            <TbFlipHorizontal
              style={filterStyles}
              onClick={flipHorizontalHandler}
            />
          </div>
        </label>
      </div>
      <button onClick={resetHandler}>Reset Filters</button>
    </div>
  );
};

export default Controls;
