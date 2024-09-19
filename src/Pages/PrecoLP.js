import React from 'react';
import MenuHeader from '../componentes/menu';
import { HistoricoPrecosConvencional } from '../componentes/precoLp/Historico';

function PrecoLp(){
    return(
        <div>
            <MenuHeader/>
            <HistoricoPrecosConvencional/>
        </div>
    );
}

export default PrecoLp;

// Preço LP vai ter um filtro de Tipo de Energia (convencional, incentivada, etc)
// Aqui os dados deverão ser atualizamos manualmente