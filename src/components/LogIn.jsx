import React, { useState,useEffect } from "react"
import facade from "../apiFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from "./UserPage.jsx";
import LoginForm from "./LoginForm.jsx";

function LogIn() {
    const [loggedIn, setLoggedIn] = useState(false)

    const logout = () => { facade.logout()
        setLoggedIn(false)
    }
    const login = (user, pass) => {facade.login(user,pass)
        .then(res =>setLoggedIn(true));
    }

    return (
        <div>
            {!loggedIn ? (<LoginForm login={login} />) :
                (<div>
                    <UserPage />
                    <button onClick={logout}>Logout</button>
                </div>)}
        </div>
    )

}
export default LogIn;
