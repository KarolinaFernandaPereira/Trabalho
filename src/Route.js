import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import Volume from "./Pages/Volume.js";
import Preco from "./Pages/Preco.js";
import Agressoes from "./Pages/Agressoes.js";
import Swap from "./Pages/Swap.js";

const AppRoutes = () => {
    return (
       <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/volume" element={<Volume/>}></Route>
                <Route path="/preco" element={<Preco/>}></Route>
                <Route path="/agressoes" element={<Agressoes/>}></Route>
                <Route path="/swap" element={<Swap/>}></Route>
            </Routes>
       </Router>
    )
}

export default AppRoutes;
