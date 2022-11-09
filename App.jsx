import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarcomp from "./src/components/NavbarComp.jsx";
import WelcomePage from "./src/pages/WelcomePage.jsx";
import About from "./src/pages/About.jsx";
import LogIn from "./src/components/LogIn.jsx";
import GetJoke from "./src/components/GetJoke.jsx";
import {Alert} from "react-bootstrap";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');


    return (
        <BrowserRouter>

            <Navbarcomp/>

            <Routes>

                <Route path="/" element={<WelcomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>}/>
                <Route path="joke" element={<GetJoke/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <Alert className="mt-4" >Status: {errorMessage}</Alert>
        </BrowserRouter>
    );
}

export default App;