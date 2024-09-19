import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import "./Indicadores.css";
import { FloatLabel } from 'primereact/floatlabel';

export const MultiSelectIndicadores = ({contentIndi}) => {

    const menuLeft = useRef(null);
    const toast = useRef(null);
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <FloatLabel>
                <MultiSelect value={selected} onChange={(e) => setSelected(e.value)} options={contentIndi} optionLabel="label" 
                 maxSelectedLabels={3} className="MultiIndicador" display="chip" filter />
                <label htmlFor="ms-cities">Indicadores</label>
            </FloatLabel>
            </div>
    );
}

// Indicadores só tem em Produto e Swap