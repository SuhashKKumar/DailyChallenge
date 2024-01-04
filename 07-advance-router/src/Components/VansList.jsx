import imgURL from "../assets/cream-van.svg";
import "../styles/VansList.css";
const VansList = () => {
  return (
    <div className="vans-list-container fourth-bg">
      <div className="vans-list-inner-container">
        <img
          src={imgURL}
          width={75}
          height={75}
          alt="Modest explorer cream van"
        />
        <div className="vans-list-details">
          <p>
            <strong>Modest Explorer</strong>
          </p>
          <p>$60/day</p>
        </div>
      </div>
      <p className="edit">Edit</p>
    </div>
  );
};

export default VansList;
