import { useOutletContext } from "react-router-dom"

const HostVansPhotos = () => {

  const hostVanInfo = useOutletContext()
  return (
    <img src={hostVanInfo.imageUrl} width={125} alt={`photo of a ${hostVanInfo.name}`}/>
  );
};

export default HostVansPhotos