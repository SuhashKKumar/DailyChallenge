import CurvedModal from "../CurvedModal/CurvedModal";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./HeroSection.css";
import circleModel from "../../assets/main-modal.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-section">
        <h1 className="hero-headline">
          Find the right freelance service,
          <span>
            <ImageContainer />
          </span>
          right away
        </h1>
        <hr className="hero-line" />
        <div className="text-container">
          <h3>Mission</h3>
          <p>Truelance's mission is to change how the world works together.</p>
        </div>
      </div>
      <div className="right-section">
        <h2 className="dots">
          .<span>.</span>
        </h2>
        <CurvedModal>
          <div className="image-box"  ></div>
        </CurvedModal>
        <div className="glass-container">
          <img
            src={circleModel}
            alt="Georgie Harris"
            width="55px"
            height="55px"
          />
          <div className="glass-text">
            <h5>Marvin Harrington</h5>
            <h4>UX/UI Designer</h4>
            </div>
            <h5>5★</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
