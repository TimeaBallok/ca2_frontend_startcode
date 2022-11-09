import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import LogIn from './components/LogIn.jsx'
import Navbarcomp from './components/NavbarComp'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './style/index.css'
import RenameMe from "./components/RenameMe.jsx";
import WelcomePage from './pages/WelcomePage';
import GetJoke from "./components/GetJoke.jsx";
import About from "./pages/About.jsx";

const rootElement = document.getElementById("root");
render(
    
  <BrowserRouter>
  
  <Navbarcomp/>

      <Routes>

            <Route path="/" element={<WelcomePage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="joke" element={<GetJoke/>}/>
          <Route
              path="*"
              element={
                  <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                  </main>
              }
          />
      </Routes>
  </BrowserRouter>,
    rootElement



)
