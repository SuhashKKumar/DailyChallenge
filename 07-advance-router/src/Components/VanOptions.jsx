const VanOptions = ({ type }) => {
  return (
    <h4
      className={` van-type white-color ${
        type === "simple"
          ? "black-bg"
          : type === "luxury"
          ? "second-bg"
          : "fourth-bg black-color"
      }`}
    >
      {type}
    </h4>
  );
};

export default VanOptions;
