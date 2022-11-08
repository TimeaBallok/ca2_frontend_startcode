import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import App from './App'
import Navbarcomp from './components/NavbarComp'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './style/index.css'
import RenameMe from "./components/RenameMe.jsx";
import WelcomePage from './pages/WelcomePage';

const rootElement = document.getElementById("root");
render(
    
  <BrowserRouter>
  
  <Navbarcomp/>

      <Routes>

            <Route path="/" element={<WelcomePage/>}/>
            <Route path="renameMe" element={<RenameMe/>}/>
            <Route path="login" element={<App/>}/>
              
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
