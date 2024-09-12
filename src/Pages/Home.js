import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/resumo/Ranking';


function Home(){
    return(
        <div>
            <MenuHeader/>
            
            <RankingVolume/>
            {/* <HorizontalRulerChart /> */}

        </div>
    );
}

export default Home;