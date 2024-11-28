import React from 'react';
import MenuHeader from '../componentes/menu';
import { RankingVolume } from '../componentes/resumo/Ranking';
import { Accordion, AccordionTab } from 'primereact/accordion';
import "./Home.css";
import { GraficoRankingVolume } from '../componentes/resumo/charts/rankingVolume';
import { GraficoDistribuicaoVolume } from '../componentes/resumo/charts/distribuicaoVolume';
import { GraficoMapaVolumeDiario } from '../componentes/resumo/charts/volumeDiario';
import { GraficoHistoricoAgressoes } from '../componentes/produto/historicoAgressoes';
import { GraficoPercentualAgressoes } from '../componentes/produto/percentualAgressoes';
import { GraficoResumoDia } from '../componentes/resumo/charts/resumoDia';
import { GraficoResumoSemana } from '../componentes/resumo/charts/resumoSemana';
import { GraficoMapaLinhaVol } from '../componentes/resumo/charts/LinhaVolumeDiario';
import { GraficoAgressaoAcumulada } from '../componentes/produto/agressaoAcumulada';

function Home(){
    return(
        <div>
            <MenuHeader/>
            
            <div className='MapaVolume1'>

                <div>
                    {/* MAPA DE VOLUME DIARIO */}
                    <div className="MapaVolume2">
                        <Accordion activeIndex={0} className="MapaVolume3">
                            <AccordionTab header={
                                <>
                                    <span> Mapa de Volume Diário </span>
                                </>
                            }>

                            <div className="cardGraficoVolume">
                                <GraficoMapaVolumeDiario /> 
                                <GraficoMapaLinhaVol />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='conjuntoHome4'>
                
                <div>         
                    { /* PercentualAgressoes */}        
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Percentual de Agressões </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoPercentualAgressoes />   
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <div>            
                { /* HistoricoAgressoes */}  
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="historicoAgressoes">
                            <AccordionTab  header={
                                <>
                                    <span> Histórico de Agressões </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>
                                <GraficoHistoricoAgressoes />   
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                        
               
            </div>
            
            {/* <HorizontalRulerChart /> */}
            <div className='conjuntoHome'>
                <div>  
                    { /*Resumo Dia*/}           
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="resumoDia">
                            <AccordionTab  header={
                                <>
                                    <span> Resumo do Dia </span>
                                </>
                            }>
                                
                                <div className='CardGrficoHome' >

                                    <GraficoResumoDia />   
                                    
                                </div>
                                

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <div>  
                    { /*Resumo Dia*/}           
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="resumoSemana">
                            <AccordionTab  header={
                                <>
                                    <span> Resumo da Semana </span>
                                </>
                            }>
                                
                                <div className='CardGrficoHome'>

                                    <GraficoResumoSemana />   
                                </div>
                                   

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='conjuntoHome2'>
                
                <div>  
                    { /*Ranking Volume*/}           
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="rankingVolume">
                            <AccordionTab  header={
                                <>
                                    <span> Ranking Volume </span>
                                </>
                            }>
                                
                                <div className='CardGrficoHome1' >

                                    <GraficoRankingVolume />   
                                </div>
                                   

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                
                <div>  
                    { /*Distribuição de Volume*/}           
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="distribuicaoVolume">
                            <AccordionTab  header={
                                <>
                                    <span> Distribuição de Volume </span>
                                </>
                            }>
                                <div className='CardGrficoHome'>

                                    <GraficoDistribuicaoVolume />   
                                </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

            </div>

            {/* <div className='conjuntoHome3'>
                <div>  
                     Mapa Volume          
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="volume">
                            <AccordionTab  header={
                                <>
                                    <span> Mapa de Volume Diário </span>
                                </>
                            }>
                                
                                <div className='CardGrficoHome' >

                                    <GraficoMapaVolumeDiario />   
                                    <GraficoMapaLinhaVol />
                                </div>
                                   

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div> */}

        </div>
    );
}

export default Home;

/*
<div>             
    <div className="containerProduto" >
        <Accordion activeIndex={1} className="volume">
            <AccordionTab  header={
                <>
                    <span> Volume </span>
                </>
            }>
            
                

            </AccordionTab>
        </Accordion>
    </div>
</div>



 <div className='conjuntoHome3'>
                <div>  
                             
                    <div className="containerHome" >
                        <Accordion activeIndex={1} className="mapaVolume">
                            <AccordionTab  header={
                                <>
                                    <span> Mapa de linha Volume Diário </span>
                                </>
                            }>
                                
                                <div className='CardGrficoHome'>

                                    <GraficoMapaLinhaVol />   
                                </div>
                                   

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>


*/