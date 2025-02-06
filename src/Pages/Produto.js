import React, { useEffect, useState } from 'react';
import MenuHeader from '../componentes/menu';
import Filtro1 from '../componentes/produto/filtro';
import { Accordion, AccordionTab } from 'primereact/accordion';
import "./Produto.css";
import { GraficoVolumeAtPrice } from '../componentes/produto/volumeAtPrice';
import { GraficoBookOfertas } from '../componentes/produto/bookOfertas';
import { GraficoVolume } from '../componentes/produto/volume';
import { GraficoAgressao } from '../componentes/produto/agressao';
import { GraficoAgressaoAcumulada } from '../componentes/produto/agressaoAcumulada';
import { GraficoPercentualAgressoes } from '../componentes/produto/percentualAgressoes';
import { GraficoHistoricoAgressoes } from '../componentes/produto/historicoAgressoes';
import { GraficoPrecos } from '../componentes/produto/precos';

import { InputSwitch } from "primereact/inputswitch";
import { GraficoCandleStick } from '../componentes/produto/candleStick';
import { GraficoMacd } from '../componentes/indicadores/macd';
import { GraficoRsi } from '../componentes/indicadores/rsi';
import BotaoIndicador from '../componentes/BotaoIndicador';
import { useNavigate } from "react-router-dom";

import { MultiSelect } from 'primereact/multiselect';

import { GraficoAtr } from '../componentes/indicadores/atr';
import { GraficoVolutidade } from '../componentes/indicadores/volatilidade';
import axios from 'axios';

function Produto(){

    


    const [check, setCheck] = useState(false);

    const [selectedIndi, setselectedIndi] = useState([]);

    useEffect(()=>{console.log("resultado",typeof(selectedIndi))},[selectedIndi])

    const navigate = useNavigate();
    

    const indicadores = [
        {
            name: 'Stop ATR', code: 'ATR', 
        },
        {
            name: 'RSI', code: 'RSI', 
        },
        {
            name: 'MACD', code: 'MACD', 
        },        
        {
            name: 'SAR Parabólico', code: 'SAR',
        },
        {
            name: 'Supertrend', code: 'SUPER', 
        },
        {
            name: 'Bandas de Bollinger', code: 'BOLLINGER', 
        },
        {
            name: 'Médias Móveis das Máximas e Mínimas', code: 'MEDIA', 
        }, 
        {
            name: 'Volatilidade', code: 'VOL', 
        }, 
    ]; 

    
    

    function config() {
       navigate("/configuracoes");
    }

    return(
        <div>
            <MenuHeader/>
            <Filtro1/>

            <div style={{display: 'flex', alignItems: 'center', marginTop: '4px', gap: '15px', flexDirection: 'row-reverse', justifyContent: 'center', paddingBottom: '12px'}}>

                <InputSwitch checked={check} onChange={(e) => setCheck(e.value)}/>
                <span>Alterar visualização de gráfico </span>
                <div>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-wave-pulse"></i>
                    </span>
                    <MultiSelect value={selectedIndi} onChange={(e) => setselectedIndi(e.value)} options={indicadores} 
                    display="chip" optionLabel="name" optionGroupChildren={['indicadores']}
                    className="IndicadorBotaoFiltragem" breakpoint="1000px" placeholder="Selecione Indicadores" />
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-cog" style={{ cursor:"pointer"}} onClick={config}></i>
                    </span>
                </div>
            </div>
            </div>

            <div className="conjuntoProdutos">
                {/* VOLUME AT PRICE */}
                <div className="containerProduto">
                    <Accordion activeIndex={0} className="volumeAtPrice">
                        <AccordionTab header={
                            <>
                                <span> Volume at Price </span>
                            </>
                        }>

                        <div className="cardGraficoVolumeAtPrice">
                            <GraficoVolumeAtPrice/>
                        </div>

                        </AccordionTab>
                    </Accordion>
                </div>

                {/* PREÇO */}
                <div>

                    <div className="containerProduto">
                        
                        {check ? (<Accordion activeIndex={0} className="preco">
                            <AccordionTab header={
                                <>
                                    <span> Preços </span>
                                </>
                            }>

                            <div className="cardGraficoPreco">
                                
                                <GraficoPrecos />
                                
                            </div>
                            
                            </AccordionTab>
                        </Accordion>
                        ): ( <Accordion activeIndex={0} className="preco">
                        <AccordionTab header={
                            <>
                                <span> Preços </span>
                            </>
                        }>

                        <div className="cardGraficoPreco">
                            <GraficoCandleStick indicador={selectedIndi}/>
                            
                        </div>
                        { selectedIndi.map((chart) => { 
                            if(chart.code === 'MACD'){
                                return <GraficoMacd />
                            } 
                            if(chart.code === 'RSI'){
                                return <GraficoRsi />
                            } 
                            if(chart.code === 'ATR'){
                                return <GraficoAtr />
                            }
                            if(chart.code === 'VOL'){
                                return <GraficoVolutidade />
                            }

                        })}
                        </AccordionTab>
                    </Accordion>)}
                        
                    
                    </div>

                    {/* <div style={{display: 'flex', alignItems: 'center', marginTop: '4px', gap: '15px', flexDirection: 'row-reverse', justifyContent: 'start'}}>

                        <InputSwitch checked={check} onChange={(e) => setCheck(e.value)}/>
                        <span>Alterar para Gráfico de Bolha</span>
                        <BotaoIndicador />
                    </div> */}
                </div>

                {/* BOOK DE OFERTAS */}
                <div className="containerProduto">
                    <Accordion activeIndex={0} className="bookOferta">
                        <AccordionTab header={
                            <>
                                <span> Book de Ofertas </span>
                            </>
                        }>

                        <div className="cardGraficoBook">
                            <GraficoBookOfertas />
                        </div>

                        </AccordionTab>
                    </Accordion>
                </div>

            </div>

            { /* MACD */}  
            {/* <div style={{paddingTop: '35px'}}>
                
               

                <div className="conjuntoProdutos_Colum_Indi"> 
                
                    <div className="containerProdutoIndi">
                        <Accordion activeIndex={1}>
                            <AccordionTab className="preco" header={
                                <>
                                    <span> Indicador MACD </span>
                                </>
                            }>
                            
                            <div className='CardGrficoHome'>
                                <GraficoMacd />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div> 


            </div> */}

            <div className='conjuntoProdutos_Colum'>
                <div>
                    {/* VOLUME */}
                    <div className="containerProduto" >
                        <Accordion activeIndex={1} className="volume">
                            <AccordionTab  header={
                                <>
                                    <span> Volume </span>
                                </>
                            }>
                            
                                <GraficoVolume />

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <div>
                    {/* AGRESSÃO */}
                    <div className="containerProduto">
                        <Accordion activeIndex={1} className="agressao">
                            <AccordionTab  header={
                                <>
                                    <span> Agressão </span>
                                </>
                            }>

                            <div className="cardGraficoVolume">
                                <GraficoAgressao />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                
                <div>
                    {/* AGRESSÃO ACUMULADA */}
                    <div className="containerProduto">
                        <Accordion activeIndex={1} className="agrssaoAcumulado">
                            <AccordionTab header={
                                <>
                                    <span> Agressão Acumulada </span>
                                </>
                            }>

                            <div className="cardGraficoVolume">
                                <GraficoAgressaoAcumulada />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

            </div>

           
            <div className='conjuntoProdutos_Row'>
                 {/* PERCENTUAL DE AGRESSOES */}
                <div>
                    <div className="containerProduto">
                        <Accordion activeIndex={1} className="percentualAgressoes">
                            <AccordionTab header={
                                <>
                                    <span> Percentual de Agressões </span>
                                </>
                            }>

                            <div className="cardGraficoPercentual">
                                <GraficoPercentualAgressoes />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>

                </div>
                
                
                { /* PERCENTUAL DE AGRESSÕES */ }
                <div>
                    <div className="containerProduto">
                        <Accordion activeIndex={1} className="percentualAgressoes">
                            <AccordionTab header={
                                <>
                                    <span> Histórico de Agressões </span>
                                </>
                            }>

                            <div className="cardGraficoPercentual">
                                <GraficoHistoricoAgressoes />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
                        

            </div>
             
        </div>
        
    );
}

export default Produto;

//  
/*
 <div className="conjuntoProdutos">
                { HISTORICO DE AGRESSÕES }
                <div className="containerProduto">
                    <Accordion activeIndex={1} className="historicoAgressoes">
                        <AccordionTab header={
                            <>
                                <span> Histórico de Agressões </span>
                            </>
                        }>

                        <div className="cardGraficoHistorico">

                        </div>

                        </AccordionTab>
                    </Accordion>
                </div>

                { PERCENTUAL DE AGRESSÕES }
                <div className="containerProduto">
                    <Accordion activeIndex={1} className="percentualAgressoes">
                        <AccordionTab header={
                            <>
                                <span> Percentual de Agressões </span>
                            </>
                        }>

                        <div className="cardGraficoPercentual">

                        </div>

                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
*/

// ´Produto precisa ter uma lista de filtros favoritos para não ter que ficar refazendo o filtro toda vez!