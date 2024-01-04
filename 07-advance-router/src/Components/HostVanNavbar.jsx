import { NavLink } from "react-router-dom";

const HostVanNavbar = () => {
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
        Details
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-item black-color nav-item-active"
            : " nav-item black-color"
        }
        to="pricing"
      >
        Pricing
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-item black-color nav-item-active"
            : " nav-item black-color"
        }
        to="photos"
      >
        Photos
      </NavLink>
    </div>
  );
};

export default HostVanNavbar;
