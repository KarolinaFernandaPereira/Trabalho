import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/resumo/Ranking';
import HorizontalRulerChart from '../componentes/resumo/Semana';

function Home(){
    return(
        <div>
            <MenuHeader/>
            <RankingVolume/>
            <HorizontalRulerChart />
        </div>
    );
}

export default Home;