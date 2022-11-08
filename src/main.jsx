import ReactDOM from 'react-dom/client'
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './style/index.css'
import StartCodeGuide from "./components/StartCodeGuide.jsx";
import NavbarComp from "./components/NavbarComp.jsx";
import NavBar from "./components/NavBar.jsx";
import GetJoke from "./components/getJoke.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="login" element={<App />}/>
          <Route path="startCodeGuide" element={<StartCodeGuide/>}/>
          <Route path="getJoke" element={<GetJoke/>}/>
          <Route path="*" element={
                  <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                  </main>
          }/>

      </Routes>
  </BrowserRouter>



)
