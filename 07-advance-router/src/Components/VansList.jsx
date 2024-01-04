import imgURL from "../assets/cream-van.svg";
import "../styles/VansList.css";
const VansList = (prop) => {
  const {imageUrl, name,price}=prop
  return (
    <div className="vans-list-container fourth-bg">
      <div className="vans-list-inner-container">
        <img
          src={imageUrl?imageUrl:imgURL}
          width={75}
          height={75}
          alt="Modest explorer cream van"
        />
        <div className="vans-list-details">
          <p>
            <strong>{name?name:'Modest Explorer'}</strong>
          </p>
          <p>${price?price:'60'}/day</p>
        </div>
      </div>
      <p className="edit">Edit</p>
    </div>
  );
};

export default VansList;
