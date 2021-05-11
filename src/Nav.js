import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav({dogs}) {
  const link = dogs.map(dog => (
    <NavLink className="Nav-doglink"
    key={dog.name} 
    to={`/dogs/${dog.name.toLowerCase()}`} >
      {dog.name}
    </NavLink>
  ));
  return (
      <nav>
        <NavLink exact to="/dogs">All dogs!</NavLink>
        {link}
      </nav>


  );
}


export default Nav;
