import React from 'react';
import {Link, Outlet} from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="startCodeGuide">Guide</Link> { "|| " }
                <Link to="login">Login</Link>

            </nav>
            <Outlet />


        </div>
    );
}

export default NavBar;