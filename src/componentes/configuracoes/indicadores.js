import { FloatLabel } from 'primereact/floatlabel'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';



export const IndicadoresConfiguracoes = () => {

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return ( 
        <div className='container_indi' style={{height: '100%', width: '100%'}}>
            <div className='header' style={{width: '100%'}}>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Selecione um indicador" checkmark={true}  highlightOnSelect={false} style={{width: '14rem'}}/>
         
            </div>
        </div>
    )
}