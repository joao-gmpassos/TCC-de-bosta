import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Login from "./pages/Login/Login";
import Menu from "./pages/menu/Menu";
import ListUs from "./pages/ListUsuários/ListUsuários";
import Cadus from "./pages/CadUsuario/CadUsuario";
import Delus from "./pages/DelUsuario/DelUsuario";


const App = () => {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/listus" element={<ListUs />} />
              <Route path="/cadus" element={<Cadus/>} />
              <Route path="/delus" element={<Delus/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
    }

export default App;