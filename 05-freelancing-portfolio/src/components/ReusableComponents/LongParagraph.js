import React from "react";

const LongParagraph = ({ text = "dummy text", styles='hero-para' }) => {
  return <div className={styles} >{text}</div>;
};

export default LongParagraph;
