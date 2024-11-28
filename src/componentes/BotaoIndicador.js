import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

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
            <div className="cardFiltro">
                <MultiSelect value={selectedIndi} onChange={(e) => setselectedIndi(e.value)} options={indicadores} 
                    display="chip" optionLabel="name" optionGroupChildren={['indicadores']}
                    className="filtroEnergia" breakpoint="767px" placeholder="Selecione Indicadores" />
            </div>
        </>
    )

}