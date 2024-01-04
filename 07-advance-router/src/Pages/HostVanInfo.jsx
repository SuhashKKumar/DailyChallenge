import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HostVanCardLarge from "../Components/HostVanCardLarge";
import HostVanNavbar from "../Components/HostVanNavbar";

const HostVanInfo = () => {
  const { id } = useParams();

  const [hostVanInfo, setHostVanInfo] = useState();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((res) => setHostVanInfo(...res.vans))
      .catch((error) => console.log(error));
  }, [id]);
  if(!hostVanInfo) return <h1>Loading...</h1>
  return (
    <div>
      <HostVanCardLarge hostVanInfo={hostVanInfo} />
      <HostVanNavbar />
    </div>
  );
};

export default HostVanInfo;
