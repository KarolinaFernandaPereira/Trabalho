import React from 'react';
import MenuHeader from '../componentes/menu';
import { HistoricoPrecosConvencional } from '../componentes/precoLp/Historico';
import Filtro2 from '../componentes/precoLp/FiltroLp';
import { GraficoDistribuicaoVolume } from '../componentes/resumo/charts/distribuicaoVolume';
import { Accordion, AccordionTab } from 'primereact/accordion';

function PrecoLp(){
    return(
        <div>
            <MenuHeader/>
            <Filtro2/>
            <HistoricoPrecosConvencional/>
            <div>  
                    { /*Distribuição de Volume*/}           
                    <div>
                        <Accordion activeIndex={1} className="cardGrafico3" >
                            <AccordionTab  header={
                                <>
                                    <span> Distribuição de Volume </span>
                                </>
                            }>
                                <div>

                                    <GraficoDistribuicaoVolume />  
                                </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
            </div>
        </div>
    );
}

export default PrecoLp;

// Preço LP vai ter um filtro de Tipo de Energia (convencional, incentivada, etc)
// Aqui os dados deverão ser atualizamos manualmente