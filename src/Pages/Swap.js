import React from 'react';
import MenuHeader from '../componentes/menu';
import { GraficoSwap01 } from '../componentes/swap/swap01';
import "../componentes/swap/swap.css" 
import { GraficoSwap02 } from '../componentes/swap/swap02';
import Filtro1 from '../componentes/produto/filtro';
import BotaoIndicador from '../componentes/BotaoIndicador';

function Swap(){
    return(
        <div>
            <MenuHeader/>
            <Filtro1 />
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center'}}>

                <BotaoIndicador />
            </div>
            <div className='containerSwap'>
                <div className='cardGrafico2'>
                    <GraficoSwap01 />
                    <GraficoSwap02 />
                </div>
            </div>
            
        </div>
    );
}

export default Swap;