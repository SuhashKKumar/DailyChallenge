import React from "react";
import './Navbar.css'
import { NavbarItems } from "../../lib/NavbarItems";
import { NavbarButtons } from "../../lib/NavbarButtons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
      {
        NavbarItems.map(({id, name, type  })=>{
         return <li key={id} className={type}>{name}</li>
        })
      }
      </div>
      <div className="nav-btns">
      {
        NavbarButtons.map(({id, type, name})=>{
          return <button key={id} className={`btn ${type}`} >{name}</button>
        })
      }      
      </div>
    </div>
  );
};

export default Navbar;
