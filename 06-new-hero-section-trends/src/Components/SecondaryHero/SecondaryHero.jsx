import CurvedModal from "../CurvedModal/CurvedModal";
import pencil from "../../assets/pencil.svg";
import headphones from "../../assets/headphones.svg";
import InformationContainer from "../InformationContainer/InformationContainer";
import "./SecondaryHero.css";
import arrow from '../../assets/arrow.svg'

const SecondaryHero = () => {
  return (
    <div className="secondary-hero">
      <div className="secondary-left">
        <CurvedModal>
          <div
            className="color-box"
            style={{ background: "var(--orange-color)" }}
          ></div>
        </CurvedModal>
        <InformationContainer icon={pencil} text="1500" textName="services" />
        <CurvedModal>
          <div
            className="color-box"
            style={{ background: "var(--foreground-grey)" }}
          ></div>
        </CurvedModal>
        <InformationContainer
          icon={headphones}
          text="24/7"
          textName="support"
        />
      </div>
      <div className="secondary-right">
        <div className="secondary-info">
          <div className="about">
            <h1>100K+</h1>
            <h6>freelancers</h6>
          </div>
          <div className="about">
            <h1>500K+</h1>
            <h6>5 star reviews</h6>
          </div>
        </div>
        <div className="explore" >
        <h2>Explore Truelance Talent</h2>
        <img src={arrow} alt='arrow icon' width='75px' height='75px' />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHero;
