import React from "react";
import { NavLink } from "react-router-dom";

function NavHeader(props) {
    return (
        <div id="header-container">
            <nav className="site-nav">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        {props.authState && <NavLink to="/blog-overview">Blogposts</NavLink> }

                    </li>
                </ul>
            </nav>
            <p id="inlog-status">You are{props.authState ? " logged " : " not logged "}in</p>
        </div>
    );
}

export default NavHeader;