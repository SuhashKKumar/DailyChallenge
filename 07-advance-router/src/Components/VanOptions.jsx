const VanOptions = (prop) => {
  const {type}=prop
  return (
    <h4
      className={` van-type white-color ${
        type === "simple"
          ? "black-bg"
          : type === "luxury"
          ? "first-bg"
          : "fourth-bg black-color"
      }`}
    >
      {type}
    </h4>
  );
};

export default VanOptions;
