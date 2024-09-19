import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import "./Indicadores.css";

export const Indicadores = ({contentIndi}) => {

    const menuLeft = useRef(null);
    const toast = useRef(null);

    return (
        <div>
            <Toast ref={toast}></Toast>
            <Menu model={contentIndi} popup ref={menuLeft} id="popup_menu_left" className="MenuIndicadores"/>
            <Button label="Indicadores" className="Indicadores" icon="pi pi-calculator"
            onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup/>
        </div>
    );
}

// Aquela não é a lista de indicadores, e, sim, gráficos!