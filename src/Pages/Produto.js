import React from 'react';
import MenuHeader from '../componentes/menu';
import Filtro1 from '../componentes/produto/filtro';

function Produto(){
    return(
        <div>
            <MenuHeader/>
            <Filtro1/>
        </div>
    );
}

export default Produto;

// ´Produto precisa ter uma lista de filtros favoritos para não ter que ficar refazendo o filtro toda vez!