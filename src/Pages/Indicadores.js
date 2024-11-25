import React from 'react';
import MenuHeader from '../componentes/menu';
import { GraficoAtr } from '../componentes/indicadores/atr';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { GraficoMacd } from '../componentes/indicadores/macd';
import { GraficoRsi } from '../componentes/indicadores/rsi';
import { GraficoSar } from '../componentes/indicadores/sar';
import { GraficoSuperTrend } from '../componentes/indicadores/supertrend';
import { GraficoMediasMoveis } from '../componentes/indicadores/mediasMoveis';
import { BollingerBandsArea } from '../componentes/indicadores/bandasbollinger';
import { GraficoSarNew } from '../componentes/indicadores/sarNew';
import { GraficoSupertrendNew } from '../componentes/indicadores/supertrendNew';

function Indicador(){
    return (
        <>
            <div>
                <MenuHeader/>
            </div>
            
            <div className='conjuntoHome4'>
                
                <div>         
                    { /* ATR */}        
                    <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Stop ATR </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoAtr/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                <div>         
                { /* RSI */}        
                <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador RSI </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoRsi/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                
            </div>

            <div style={{paddingTop: '35px'}}>
                
               

                <div className="agrssaoAcumulado"> 
                { /* MACD */}  
                    <div>
                        <Accordion activeIndex={0}>
                            <AccordionTab  header={
                                <>
                                    <span> Indicador MACD </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>
                                <GraficoMacd/>
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div> 


            </div>

            { /* SAR */} 
            <div className='conjuntoHome4' style={{paddingTop: '35px'}}>
                
                <div>         
                    { /* Original */}        
                    <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador SAR Parabólico 1</span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoSar/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                <div>         
                { /* Novo */}        
                <div className="containerHome" >
                    <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador SAR Parabólico 2</span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoSarNew/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                
            </div>

            { /* SuperTrend */} 
            <div className='conjuntoHome4' style={{paddingTop: '35px'}}>
                
                <div>         
                    { /* Original */}        
                    <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Supertrend 1</span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoSuperTrend/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                <div>         
                { /* Novo */}        
                <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Supertrend 2</span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoSupertrendNew/>  
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                
            </div>

            <div style={{paddingTop: '35px'}}>
                <div className="agrssaoAcumulado"> 
                { /* BOLLINGER */}  
                    <div>
                        <Accordion activeIndex={0}>
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Bandas de Bollinger </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>
                                <BollingerBandsArea/>
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div> 


            </div>

            <div style={{paddingTop: '35px'}}>
                <div className="agrssaoAcumulado"> 
                { /* Médias Móveis */}  
                    <div>
                        <Accordion activeIndex={0}>
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Médias Móveis das Máximas e Mínimas </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>
                                <GraficoMediasMoveis />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div> 


            </div>
        </>
    );
}

export default Indicador;