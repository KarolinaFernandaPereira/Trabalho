import React from 'react';
import MenuHeader from '../componentes/menu';
import Filtro1 from '../componentes/produto/filtro';
import { GraficoAtr } from '../componentes/indicadores/atr';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { GraficoMacd } from '../componentes/indicadores/macd';
import { GraficoRsi } from '../componentes/indicadores/rsi';

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

            <div>
                
               

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
        </>
    );
}

export default Indicador;