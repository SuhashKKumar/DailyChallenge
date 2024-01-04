import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVansPricing = () => {
  const { id } = useParams();
  const [vanPricing, setVanPricing] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((res) => setVanPricing(res.vans[0]))
      .catch((error) => console.log(error));
  }, [id]);
  if (!vanPricing) return <h1>Loading...</h1>;
  return (
    <p>
      <strong>${vanPricing.price}</strong>/day
    </p>
  );
};

export default HostVansPricing;
