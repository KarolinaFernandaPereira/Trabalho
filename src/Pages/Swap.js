import React from 'react';
import MenuHeader from '../componentes/menu';
import { GraficoSwap01 } from '../componentes/swap/swap01';
import "../componentes/swap/swap.css" 
import { GraficoSwap02 } from '../componentes/swap/swap02';

function Swap(){
    return(
        <div>
            <MenuHeader/>
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