import React from "react";
import { Link  } from "react-router-dom";

const Navbar = () => (
    <nav> 
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="about"> About </Link> </li>
            <li>
                <Link to="article/test"> Article </Link>
            </li>
            <li>
                <Link to="list"> List </Link>
            </li>

        </ul>
    </nav>
)

export default Navbar