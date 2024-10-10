import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import "./FiltroLp.css"

export default function Filtro2(){
    const [selectedEnergia, setselectedEnergia] = useState(null);

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

    const Limpar = () => {
        setselectedEnergia(null);
    }

    return(
        <>
            <div className="conjuntoLP">
                <div className="conjunto1LP">
                    {/* TIPO DE ENERGIA */}
                    <div className="cardFiltroLP">
                        <span className="labelsFiltroLP"> ENERGIA: </span>
                        <MultiSelect value={selectedEnergia} onChange={(e) => setselectedEnergia(e.value)} options={energia}
                            display="chip" optionLabel="name" optionGroupChildren={['energia']}
                            className="filtroEnergiaLp" breakpoint="767px"/>
                    </div>

                    <Button label="Filtrar" className="botaoFiltroLP" />
                    <Button label="Limpar" className="botaoLimparLP" onClick={Limpar}/>
                    <i className="maisLP pi pi-plus-circle"></i>
                </div>
            </div>
        </>
    )
}