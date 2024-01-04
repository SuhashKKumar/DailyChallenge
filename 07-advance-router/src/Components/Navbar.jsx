import { NavLink } from "react-router-dom";
import ".././styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo first-color">
        #VanLife
      </NavLink>
      <div className="nav-items">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-item first-color nav-item-active"
              : " nav-item first-color"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-item first-color nav-item-active"
              : " nav-item first-color"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-item first-color nav-item-active"
              : " nav-item first-color"
          }
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-item first-color nav-item-active"
              : " nav-item first-color"
          }
          to="/vans"
        >
          Vans List
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
