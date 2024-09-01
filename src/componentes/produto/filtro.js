import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import "./filtro.css";


export default function Filtro1() {
    const [selectedProduto, setselectedProduto] = useState(null);
    const [selectedProduto2, setselectedProduto2] = useState(null);
    const [selectedProduto3, setselectedProduto3] = useState(null);


    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    const produtos = [
        {
            cname: 'Exemplo 1',
            code: 'P1',
        },
        {
            cname: 'Exemplo 2',
            code: 'P2',
        },
        {
            cname: 'Exemplo 3',
            code: 'P3',
        }
    ];

    return (
        <>
            <div className="conjunto">
                <div className="cardFiltro">
                    <span className="labelsFiltro"> PERIODO </span>
                    <CascadeSelect value={selectedProduto} onChange={(e) => setselectedProduto(e.value)} options={produtos} 
                        optionLabel="cname" optionGroupChildren={['produtos']}
                        className="casc" breakpoint="767px" placeholder="Nenhum produto selecionado" />
                </div>
                <div className="cardFiltro">
                    <span className="labelsFiltro"> SUBMERCADO </span>
                    <CascadeSelect value={selectedProduto2} onChange={(e) => setselectedProduto2(e.value)} options={produtos} 
                        optionLabel="cname" optionGroupChildren={['produtos']}
                        className="casc" breakpoint="767px" placeholder="Nenhum produto selecionado" />
                </div>

                <div className="cardFiltro">
                    <span className="labelsFiltro"> MÊS INICIAL </span>
                    
                    <Calendar value={date1} onChange={(e) => setDate1(e.value)} view="month" dateFormat="mm/yy" />

                    <span className="labelsFiltro"> MÊS FINAL </span>
                    
                    <Calendar value={date2} onChange={(e) => setDate2(e.value)} view="month" dateFormat="mm/yy" />
                </div>

                <div className="cardFiltro">
                    <span className="labelsFiltro"> TIPO ENERGIA </span>
                    <CascadeSelect value={selectedProduto3} onChange={(e) => setselectedProduto3(e.value)} options={produtos} 
                        optionLabel="cname" optionGroupChildren={['produtos']}
                        className="casc" breakpoint="767px" placeholder="Nenhum produto selecionado" />

                </div>

                

                <Button label="Filtrar" className="botaoFiltro"/>
                <Button label="Limpar" className="botaoLimpar"/>
                
            </div>
        </>
    )
}