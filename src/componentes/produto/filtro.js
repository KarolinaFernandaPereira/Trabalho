import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import "./filtro.css";


export default function Filtro1() {
    const [selectedPeriodicidade, setselectedPeriodicidade] = useState(null);
    const [selectedSubmercado, setselectedSubmercado] = useState(null);
    const [selectedTipo, setselectedTipo] = useState(null);
    const [selectedEnergia, setselectedEnergia] = useState(null);
    const [selectedContrato, setselectedContrato] = useState(null);


    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    const periodicidade = [
        {
            cname: 'Diária', code: 'DIA',
        },
        {
            cname: 'Semanal', code: 'SEM',
        },
        {
            cname: 'Quinzenal', code: 'QUI',
        },
        {
            cname: 'Bimestral', code: 'BIM',
        },
        {
            cname: 'Mensal', code: 'MEN',
        },
        {
            cname: 'Trimestral', code: 'TRI',
        },
        {
            cname: 'Semestral', code: 'SEME',
        },
        {
            cname: 'Anual', code: 'ANU',
        },
        {
            cname: 'Outros', code: 'OTR',
        },
    ];

    const submercados = [
        {
            name: 'Sudeste', code: 'SE',
        },
        {
            name: 'Sul', code: 'S',
        },
        {
            name: 'Nordeste', code: 'NE',
        },
        {
            name: 'Norte', code: 'N',
        },
        {
            name: 'Centro-Oeste', code: 'CO',
        },
    ];

    const tipos = [
        {
            name: 'Spread', code: 'Spr',
        },
        {
            name: 'Preço Fixo', code: 'Pfx',
        },
    ];

    const energia = [
        {
            name: 'CONV', code: 'CONV',
        },
        {
            name: 'I0', code: 'I0',
        },
        {
            name: 'I5', code: 'I5',
        },
        {
            name: 'I1', code: 'I1',
        },
        {
            name: 'I8', code: 'I8',
        },
        {
            name: 'CQ5', code: 'CQ5',
        },
        {
            name: 'CQ1', code: 'CQ1',
        }, 
    ];

    const contrato = [
        {
            name: 'Registro', code: 'reg',
        },
        {
            name: 'Balcão', code: 'bal',
        },
    ];

    return (
        <>
            <div className="conjunto">

                <div className="conjunto1">
                    {/* SUBMERCADO */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> SUBMERCADO: </span>
                        <MultiSelect value={selectedSubmercado} onChange={(e) => setselectedSubmercado(e.value)} options={submercados} 
                            display="chip" optionLabel="name" optionGroupChildren={['submercados']}
                            className="filtroSubmercado" breakpoint="767px" />
                    </div>

                    {/* ENERGIA */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> ENERGIA: </span>
                        <MultiSelect value={selectedEnergia} onChange={(e) => setselectedEnergia(e.value)} options={energia} 
                            display="chip" optionLabel="name" optionGroupChildren={['energia']}
                            className="filtroEnergia" breakpoint="767px" />
                    </div>

                    {/* TIPO DE ENERGIA */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> TIPO: </span>
                        <MultiSelect value={selectedTipo} onChange={(e) => setselectedTipo(e.value)} options={tipos}
                            display="chip" optionLabel="name" optionGroupChildren={['tipos']} 
                            className="filtroTipo" breakpoint="767px" />
                    </div>
                    
                </div> 

                <div className="conjunto1" >
                    
                    {/* CONTRATO */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> CONTRATO: </span>
                        <CascadeSelect value={selectedContrato} onChange={(e) => setselectedContrato(e.value)} options={contrato} 
                            optionLabel="name" optionGroupChildren={['contrato']}
                            className="filtroContrato" breakpoint="767px" />
                    </div>

                    {/* PERIODICIDADE */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> PERIODICIDADE: </span>
                        <CascadeSelect value={selectedPeriodicidade} onChange={(e) => setselectedPeriodicidade(e.value)} options={periodicidade} 
                            optionLabel="cname" optionGroupChildren={['periodicidade']}
                            className="filtroPeriodicidade" breakpoint="767px" />
                    </div>

                    {/* DATAS */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> MÊS INICIAL: </span>
                        <Calendar value={date1} onChange={(e) => setDate1(e.value)} view="month" dateFormat="mm/yy" className="filtroDatas"/>

                        <span className="labelsFiltro"> MÊS FINAL: </span>
                        <Calendar value={date2} onChange={(e) => setDate2(e.value)} view="month" dateFormat="mm/yy" className="filtroDatas" style={{fontSize: "small"}} />
                    </div>

                    <Button label="Filtrar" className="botaoFiltro"/>
                    <Button label="Limpar" className="botaoLimpar"/>

                </div>

            </div>
        </>
    )
}