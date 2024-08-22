import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/resumo/Ranking';

function Home(){
    return(
        <div className="App">
            <MenuHeader/>
            <RankingVolume/>
        </div>
    );
}

export default Home;