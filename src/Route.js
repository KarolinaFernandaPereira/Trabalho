import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import Produto from "./Pages/Produto.js";
import Swap from "./Pages/Swap.js";
import Login from "./Pages/Login.js";
import PrecoLp from "./Pages/PrecoLP.js";
import Operacoes from "./Pages/Operacoes.js"
import Indicador from "./Pages/Indicadores.js";
import Configuracoes from "./Pages/Configuracoes.js";

const AppRoutes = () => {
    return (
       <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/produto" element={<Produto/>}></Route>
                <Route path="/swap" element={<Swap/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/precolp" element={<PrecoLp/>}></Route>
                <Route path="/operacoes" element={<Operacoes/>}></Route>
                <Route path="/configuracoes" element={<Configuracoes/>}></Route>
            </Routes>
       </Router>
    )
}

export default AppRoutes;
