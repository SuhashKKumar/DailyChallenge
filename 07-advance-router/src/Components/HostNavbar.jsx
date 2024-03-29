import { NavLink } from "react-router-dom";
import "../styles/HostNavbar.css";

const HostNavbar = () => {
  return (
    <div className="nav-items nav-container ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-item black-color nav-item-active"
            : " nav-item black-color"
        }
        to="."
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-item black-color nav-item-active"
            : " nav-item black-color"
        }
        to="income"
      >
        Income
      </NavLink>
      <NavLink
      className={({ isActive }) =>
        isActive
          ? "nav-item black-color nav-item-active"
          : " nav-item black-color"
      }
      to="vans"
    >
      Vans
    </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-item black-color nav-item-active"
            : " nav-item black-color"
        }
        to="reviews"
      >
        Reviews
      </NavLink>

    </div>
  );
};

export default HostNavbar;
