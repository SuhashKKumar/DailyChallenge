import React,{useState} from "react";
import test from "../assets/images/test.jpeg";
import "../styles/preview.css";

const Preview = ({ flipHorizontal, range, flipVertical, rotateRight }) => {
  const styles = {
    // alignSelf: "center",
    width: "407px",
    transformOrigin: "center",
    transform: `rotate(${rotateRight}deg)`,
    filter: `contrast(${range.grayscale})`,
    
  };

  const rotateX = {
    transformOrigin: "center",
    transform: `rotateX(${flipHorizontal}deg)`,
    filter: `brightness(${range.brightness})`,
  };
  const rotateY = {
    transformOrigin: "center",
    transform: `rotateY(${flipVertical}deg)`,
    filter: `saturate(${range.saturation})`,
    
  };

  const inverseStyle = {
    filter: `invert(${range.inversion})`,
  };
  const [images, setImages] = useState({
    file:[]
  });
  const [status, setStatus]=useState(true)
  const imageUploadHandler=(e)=>{
    setImages(URL.createObjectURL(e.target.files[0]))
    setStatus(false)
    console.log(images)
  }
  return (
    <div className="image_container" >
      <div style={inverseStyle}>
        <div style={styles} className="preview">
          <div style={rotateY} >
            <img style={rotateX} src={status?test:images} alt="Uploaded Image" />
          </div>
        </div>  
      </div>
      <button>
        <input onChange={imageUploadHandler} type="file" name="file" id="file" className="inputfile" />
        <label htmlFor="file">Choose a file</label>
      </button>
    </div>
  );
};

export default Preview;
