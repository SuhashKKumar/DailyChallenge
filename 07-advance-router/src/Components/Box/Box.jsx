// import React from 'react';
import "./Box.css";
const Box = (props) => {
  return <div className="box-container second-bg">{props.children}</div>;
};

export default Box;
