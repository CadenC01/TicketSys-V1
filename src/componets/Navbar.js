import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navContainer">
      <div id="navStuff">
      
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/Tickets">Tickets</a>
        </li>
      
      </div>
    </div>
  );
};

export default Navbar;
