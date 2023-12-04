
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
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