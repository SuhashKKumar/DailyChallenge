import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const HostVansPhotos = () => {
  const { id } = useParams();
  const [vanPhotos, setVanPhotos] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((res) => setVanPhotos(res.vans[0]))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(vanPhotos)
  if (!vanPhotos) return <h1>Loading...</h1>;
  return (
    <img src={vanPhotos.imageUrl} width={125} alt={`photo of a ${vanPhotos.name}`}/>
  );
};

export default HostVansPhotos