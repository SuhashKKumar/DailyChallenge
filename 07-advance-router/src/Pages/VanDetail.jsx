import { useState, useEffect } from "react";
import VanOptions from "../Components/VanOptions";
import ".././styles/VanDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const [vanDetails, setVanDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans))
      .catch((error) => console.log(error, "from van"));
  }, [id]);

  console.log(vanDetails, "van details");
  return (
    <div className="van-container">
      <Link to="/vans" className="clear-filter">
        ← Back to all vans
      </Link>
      <div className="van-sub-container">
        <div className="van-sub-container-left">
          <h1 className="headline">{vanDetails?.name}</h1>
          <h2>${vanDetails?.price}/day</h2>
          <p className="para">{vanDetails?.description}</p>
          <VanOptions type={vanDetails?.type} />
        </div>
        <div className="van-sub-container-right">
          <img
            className="van-large"
            src={vanDetails?.imageUrl}
            alt="single van"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
