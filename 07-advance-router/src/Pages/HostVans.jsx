import { useEffect, useState } from "react";
import HostCard from "../Components/HostCard";
import VansList from "../Components/VansList";
import "../styles/HostVans.css";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="host-vans-container">
      <HostCard dynamicStyle={"third-bg"} para={"View all"}>
        <h2>Your listed vans</h2>
      </HostCard>
      {hostVans?.map(({ id, imageUrl, price, name }) => {
        return (
          <Link to={`/host/vans/${id}`} key={id}>
            <VansList imageUrl={imageUrl} price={price} name={name} />
          </Link>
        );
      })}
    </div>
  );
};

export default HostVans;
