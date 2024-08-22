import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import Produto from "./Pages/Produto.js";
import Swap from "./Pages/Swap.js";
import PrecoLp from "./Pages/PrecoLP.js";

const AppRoutes = () => {
    return (
       <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/produto" element={<Produto/>}></Route>
                <Route path="/swap" element={<Swap/>}></Route>
                <Route path="/precolp" element={<PrecoLp/>}></Route>
            </Routes>
       </Router>
    )
}

export default AppRoutes;
