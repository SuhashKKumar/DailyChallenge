import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {

  const hostVanInfo = useOutletContext()

  return (
    <p>
      <strong>${hostVanInfo.price}</strong>/day
    </p>
  );
};

export default HostVansPricing;
