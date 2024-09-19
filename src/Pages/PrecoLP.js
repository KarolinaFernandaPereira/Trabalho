import React from 'react';
import MenuHeader from '../componentes/menu';
import { HistoricoPrecosConvencional } from '../componentes/precoLp/Historico';
import Filtro2 from '../componentes/precoLp/FiltroLp';

function PrecoLp(){
    return(
        <div>
            <MenuHeader/>
            <Filtro2/>
            <HistoricoPrecosConvencional/>
        </div>
    );
}

export default PrecoLp;

// Preço LP vai ter um filtro de Tipo de Energia (convencional, incentivada, etc)
// Aqui os dados deverão ser atualizamos manualmente