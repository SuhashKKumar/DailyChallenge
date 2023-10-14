import "./ImageContainer.css";
import modelOne from '../../assets/circleone.jpg'
import modelTwo from '../../assets/circletwo.jpg'
import modelThree from '../../assets/circlethree.jpg'
const ImageContainer = () => {
  return (
    <div className="image-container">
      <img className="image-item" src={modelOne} width='72px' height="72px" alt='Ernest Hart' />
      <img className="image-item" src={modelTwo} width='72px' height="72px" alt='Ethan Butler' />
      <img className="image-item" src={modelThree} width='72px' height="72px" alt='Andre Fernandez' />
    </div>
  );
};

export default ImageContainer;
