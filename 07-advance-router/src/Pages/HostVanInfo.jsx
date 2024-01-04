import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HostVanCardLarge from "../Components/HostVanCardLarge";
import HostVanNavbar from "../Components/HostVanNavbar";
import "../styles/HostVanInfo.css";

const HostVanInfo = () => {
  const { id } = useParams();

  const [hostVanInfo, setHostVanInfo] = useState();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((res) => setHostVanInfo(...res.vans))
      .catch((error) => console.log(error));
  }, [id]);
  if (!hostVanInfo) return <h1>Loading...</h1>;
  return (
    <div>
      <Link to=".." relative="path">
        <u>← Back to all vans</u>
      </Link>
      <div className="white-bg host-vans-info-container ">
        <HostVanCardLarge hostVanInfo={hostVanInfo} />
        <HostVanNavbar />
        <Outlet context={hostVanInfo} />
      </div>
    </div>
  );
};

export default HostVanInfo;
