import arrow from "../../assets/arrow.svg";
import "./InformationContainer.css";
const InformationContainer = ({ icon, text, textName }) => {
  return (
    <div className="info-container">
      <div>
        <img
          className="icon"
          src={icon}
          alt="pencil icon"
          width="65px"
          height="65px"
        />
      </div>
      <div className="info-tile">
        <div className="info-text" >
          <h1>{text}</h1>
          <h2>{textName}</h2>
        </div>
        <div className="info-icon" >
        <img
        src={arrow}
        alt="upside right tilted arrow"
          width="75px"
          height="75px"
          className="arrow-icon"
          />
          </div>
      </div>
    </div>
  );
};

export default InformationContainer;
