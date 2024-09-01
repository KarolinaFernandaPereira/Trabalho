import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import Produto from "./Pages/Produto.js";
import Swap from "./Pages/Swap.js";
import Login from "./Pages/Login.js";
import PrecoLp from "./Pages/PrecoLP.js";

const AppRoutes = () => {
    return (
       <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/produto" element={<Produto/>}></Route>
                <Route path="/swap" element={<Swap/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/precolp" element={<PrecoLp/>}></Route>
            </Routes>
       </Router>
    )
}

export default AppRoutes;
