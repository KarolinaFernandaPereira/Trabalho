import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import "./filtro.css";


export default function Filtro1() {
    const [selectedProduto, setselectedProduto] = useState(null);
    const produtos = [
        {
            cname: 'Produto 1',
            code: 'P1',
        },
        {
            cname: 'Produto 2',
            code: 'P2',
        },
        {
            cname: 'Produto 3',
            code: 'P3',
        }
    ];

    return (
        <>
            <div className="conjunto">
            <span className="labelsFiltro"> PRODUTO </span>
                <div className="cardFiltro">
                    <CascadeSelect value={selectedProduto} onChange={(e) => setselectedProduto(e.value)} options={produtos} 
                        optionLabel="cname" optionGroupChildren={['produtos']}
                        className="casc" breakpoint="767px" placeholder="Nenhum produto selecionado" />
                        <Button label="Filtrar" className="botaoFiltro"/>
                        <Button label="Limpar" className="botaoLimpar"/>
                </div>
                
            </div>
        </>
    )
}