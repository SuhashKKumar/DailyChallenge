import React from "react";

import Tooltip from "@mui/material/Tooltip";
import icons from "../Utils/IconsData";
import "../styles/SideNavbar.css";

const SideNavbar = ({ navbar }) => {
  return (
    <div className={navbar ? "side_navbar" : "side_navbar_bg"}>
      <ul className="side_navbar_lists">
        {icons.map(({ id, icon, title }) => {
          return (
            <li key={id}>
              <Tooltip title={title} placement="left-start" arrow>
                <a href="#" className="side_navbar_logo">
                  <img src={icon} />
                </a>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavbar;
