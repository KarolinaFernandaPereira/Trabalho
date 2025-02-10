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

            <div class="chart-container" style={{"display": "flex", "flexDirection": "row", "justifyContent": "center"}}>
                <div>  
                        { /*Distribuição de Volume*/}           
                        <div>
                            <Accordion activeIndex={1} className="cardGrafico3" style={{"width": "41rem"}}>
                                <AccordionTab  header={
                                    <>
                                        <span> Distribuição de Volume - 2024 </span>
                                    </>
                                }>
                                    <div>

                                        <GraficoDistribuicaoVolume />  
                                    </div>

                                </AccordionTab>
                            </Accordion>
                        </div>
                </div>

                <div>  
                        { /*Distribuição de Volume*/}           
                        <div>
                            <Accordion activeIndex={1} className="cardGrafico3"  style={{"width": "41.5rem"}}>
                                <AccordionTab  header={
                                    <>
                                        <span> Distribuição de Volume - 2023 </span>
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

            <div class="chart-container" style={{"display": "flex", "flexDirection": "row", "justifyContent": "center"}}>
                <div>  
                        { /*Distribuição de Volume*/}           
                        <div>
                            <Accordion activeIndex={1} className="cardGrafico3" style={{"width": "41rem"}}>
                                <AccordionTab  header={
                                    <>
                                        <span> Distribuição de Volume - 2022 </span>
                                    </>
                                }>
                                    <div>

                                        <GraficoDistribuicaoVolume />  
                                    </div>

                                </AccordionTab>
                            </Accordion>
                        </div>
                </div>

                <div>  
                        { /*Distribuição de Volume*/}           
                        <div>
                            <Accordion activeIndex={1} className="cardGrafico3"  style={{"width": "41.5rem"}}>
                                <AccordionTab  header={
                                    <>
                                        <span> Distribuição de Volume - 2021 </span>
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

        </div>
    );
}

export default PrecoLp;

// Preço LP vai ter um filtro de Tipo de Energia (convencional, incentivada, etc)
// Aqui os dados deverão ser atualizamos manualmente