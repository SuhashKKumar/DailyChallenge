const VanOptions = (props) => {
  const type = { props };
  return (
    <h4
      className={` van-type white-color ${
        type === "simple"
          ? "first-bg"
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
