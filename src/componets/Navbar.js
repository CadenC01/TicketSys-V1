import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navcont">
      <ul>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/Tickets">Tickets</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
