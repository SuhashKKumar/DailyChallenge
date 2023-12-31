import { useState, useEffect } from "react";
import vanLarge from "../assets/cream-van-large.svg";
import ".././styles/Van.css";
import VanOptions from "../Components/VanOptions";

const VanDetail = (props) => {
    const [vanDetails, setVanDetails] = useState([])
  useEffect(() => {
    fetch(`/api/vans/${""}`)
      .then((res) => res.json())
      .then((res) => console.log(res, "from van"))
      .catch((error) => console.log(error, "from van"));
  }, []);

  console.log(vanDetails, setVanDetails, props);
  return (
    <div className="van-container">
      <p className="clear-filter">← Back to all vans</p>
      <img src={vanLarge} alt="single van" width={500} height={500} />
      <VanOptions type={"Simple"} />
      <h1 className="headline">Modest Explorer</h1>
      <h3>$60/day</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at arcu
        consequat, tristique metus sit amet, rutrum lacus. Fusce dolor enim,
        hendrerit quis facilisis sit amet, ornare et velit. Curabitur feugiat,
        purus id feugiat sagittis, lectus enim interdum quam, accumsan accumsan
        velit tellus vitae felis. Aenean semper, ligula vitae hendrerit.{" "}
      </p>
    </div>
  );
};

export default VanDetail;
