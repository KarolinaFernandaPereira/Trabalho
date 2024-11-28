import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import './BotaoIndicadores.css';

export default function BotaoIndicador(){
    const [selectedIndi, setselectedIndi] = useState(null);

    const indicadores = [
        {
            name: 'Stop ATR', code: 'ATR',
        },
        {
            name: 'RSI', code: 'RSI',
        },
        {
            name: 'MACD', code: 'MACD',
        },
        {
            name: 'SAR Parabólico', code: 'SAR',
        },
        {
            name: 'Supertrend', code: 'SUPER',
        },
        {
            name: 'Bandas de Bollinger', code: 'BOLLINGER',
        },
        {
            name: 'Médias Móveis das Máximas e Mínimas', code: 'MEDIA',
        }, 
    ];

    return (
        <>
        {/* INDICADORES */}
            <div>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-wave-pulse"></i>
                    </span>
                    <MultiSelect value={selectedIndi} onChange={(e) => setselectedIndi(e.value)} options={indicadores} 
                    display="chip" optionLabel="name" optionGroupChildren={['indicadores']}
                    className="IndicadorBotaoFiltragem" breakpoint="1000px" placeholder="Selecione Indicadores" />
                </div>
            </div>
        </>
    )

}