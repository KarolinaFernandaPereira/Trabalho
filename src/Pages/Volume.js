import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/volume/Ranking';

function Volume(){
    return(
        <div>
            <MenuHeader/>
            
            <RankingVolume/>
        </div>
    );
}

export default Volume;