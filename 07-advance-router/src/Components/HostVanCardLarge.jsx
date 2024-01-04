import VanOptions from "./VanOptions";
import "../styles/HostVanCardLarge.css";

const HostVanCardLarge = (prop) => {
  const { hostVanInfo } = prop;
  return (
    <div className="host-vans-card-large-container">
      <img
        src={hostVanInfo?.imageUrl}
        width={225}
        height={225}
        alt="Modest explorer cream van"
      />
      <div className="host-vans-card-large-sub-container">
        <VanOptions type={hostVanInfo?.type} />
        <h1>
          <strong>{hostVanInfo?.name}</strong>
        </h1>
        <p>
          <strong>${hostVanInfo?.price}</strong>/day
        </p>
      </div>
    </div>
  );
};

export default HostVanCardLarge;
