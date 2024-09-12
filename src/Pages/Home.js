import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/resumo/Ranking';
import HorizontalRulerChart from '../componentes/resumo/Semana';
import Draggable from 'react-draggable';
import { Accordion } from 'primereact/accordion';
import { ChartComponent } from '../componentes/resumo/trading'

function Home(){
    return(
        <div>
            <MenuHeader/>
            
            <RankingVolume/>
            <HorizontalRulerChart />
            <ChartComponent />
        </div>
    );
}

export default Home;