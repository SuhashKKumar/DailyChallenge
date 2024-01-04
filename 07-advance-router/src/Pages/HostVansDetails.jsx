import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/HostVanDetails.css'

const HostVansDetails = () => {
  const { id } = useParams();

  const [vanDetails, setVanDetails] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((res) => setVanDetails(res.vans[0]))
      .catch((error) => console.log(error));
  }, [id]);
  if (!vanDetails) return <h1>Loading....</h1>;
  return (
    <div className="host-vans-details-container" >
      <p>
        <strong>Name: </strong>
        {vanDetails?.name}
      </p>
      <p>
        <strong>Category: </strong>
        {vanDetails?.type}
      </p>
      <p>
        <strong>Description: </strong>
        {vanDetails?.description}
      </p>
      <p>
        <strong>Visibility: </strong>
        Public
      </p>
    </div>
  );
};

export default HostVansDetails;
