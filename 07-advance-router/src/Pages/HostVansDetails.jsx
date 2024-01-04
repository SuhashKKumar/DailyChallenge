import { useOutletContext } from "react-router-dom";
import '../styles/HostVanDetails.css'

const HostVansDetails = () => {
  const hostVanInfo = useOutletContext()

  return (
    <div className="host-vans-details-container" >
      <p>
        <strong>Name: </strong>
        {hostVanInfo?.name}
      </p>
      <p>
        <strong>Category: </strong>
        {hostVanInfo?.type}
      </p>
      <p>
        <strong>Description: </strong>
        {hostVanInfo?.description}
      </p>
      <p>
        <strong>Visibility: </strong>
        Public
      </p>
    </div>
  );
};

export default HostVansDetails;
