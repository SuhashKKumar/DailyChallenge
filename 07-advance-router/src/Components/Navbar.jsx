import { Link } from "react-router-dom";
import ".././styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo first-color">
        #VanLife
      </Link>
      <div className="nav-items">
        <Link className="nav-item first-color " to="/">
          Home
        </Link>
        <Link className="nav-item first-color " to="/about">
          About
        </Link>
        <Link className="nav-item first-color " to="/host">
          Host
        </Link>
        <Link className="nav-item first-color" to="/vans">
          Vans List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
