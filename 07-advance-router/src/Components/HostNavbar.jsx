import { Link } from "react-router-dom";
import '../styles/HostNavbar.css'

const HostNavbar = () => {
  return (
    <div className="nav-items nav-container ">
      <Link className="nav-item first-color " to="/host">
        Dashboard
      </Link>
      <Link className="nav-item first-color " to="/host/income">
        Income
      </Link>
      <Link className="nav-item first-color" to="/host/reviews">
        Reviews
      </Link>
    </div>
  );
};

export default HostNavbar;
