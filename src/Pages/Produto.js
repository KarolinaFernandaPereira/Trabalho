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

import { GraficoDistribuicaoVolume } from '../componentes/resumo/charts/distribuicaoVolume';

import axios from 'axios';
import { GraficoDistribuicaoVolumeCompra } from '../componentes/resumo/charts/distribuicaoVolumeCompra';

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

            

            {/* COLOQUE AQUI */}

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


                <div>
                    {/* AGRESSÃO ACUMULADA */}
                    <div className="containerProduto">
                        <Accordion activeIndex={1} className="agrssaoAcumulado">
                            <AccordionTab header={
                                <>
                                    <span> Distribuição de Volume </span>
                                </>
                            }>

                            <div className="cardGraficoVolume">
                                <GraficoDistribuicaoVolume />
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
                                    <span> Distribuição de Volume Compra-Venda </span>
                                </>
                            }>

                            <div className="cardGraficoVolume">
                                <GraficoDistribuicaoVolumeCompra />
                            </div>

                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>              

            </div>

           
            <div className='conjuntoProdutos_Row'>
                 {/* PERCENTUAL DE AGRESSOES */}
                <div style={{"width": "50%"}}>
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
                <div style={{"width": "50%"}}>
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