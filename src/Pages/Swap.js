import React from 'react';
import MenuHeader from '../componentes/menu';
import { Swap1 } from '../componentes/swap/swap1';

function Swap(){
    return(
        <div className="App">
            <MenuHeader/>
            <Swap1/>
        </div>
    );
}

export default Swap;