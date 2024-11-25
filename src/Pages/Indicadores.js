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


            <div className='conjuntoHome4' style={{paddingTop: '35px'}}>
                
                <div>         
                    { /* SAR */}        
                    <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador Stop ATR </span>
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
                { /* SuperTrend */}        
                <div className="containerHome" >
                        <Accordion activeIndex={0} className="percentualAgressoes1" >
                            <AccordionTab  header={
                                <>
                                    <span> Indicador RSI </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>

                                <GraficoSuperTrend/>  
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
                                <BollingerBandsArea/>
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