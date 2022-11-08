import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './style/index.css'
import RenameMe from "./components/RenameMe.jsx";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
              <Route path="renameMe" element={<RenameMe/>}/>
          </Route>
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
