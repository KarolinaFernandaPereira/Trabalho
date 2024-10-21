import React from 'react';
import MenuHeader from '../componentes/menu';
import { HistoricoPrecosConvencional } from '../componentes/precoLp/Historico';
import Filtro2 from '../componentes/precoLp/FiltroLp';

function Operacoes(){
    return(
        <div>
            <MenuHeader/>
            <Filtro2/>
            <HistoricoPrecosConvencional/>
        </div>
    );
}

export default Operacoes;