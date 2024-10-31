import React, { useState } from 'react';
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

function Produto(){

    const [check, setCheck] = useState(false);

    return(
        <div>
            <MenuHeader/>
            <Filtro1/>

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
                                
                                
                                <GraficoCandleStick />
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
                            <GraficoPrecos />
                        </div>

                        </AccordionTab>
                    </Accordion>)}
                        

                    </div>

                    <div style={{display: 'flex', alignItems: 'center', marginTop: '4px', gap: '15px', flexDirection: 'row-reverse', justifyContent: 'start'}}>

                        <InputSwitch checked={check} onChange={(e) => setCheck(e.value)}/>
                        <span>Alterar Gráfico</span>
                    </div>
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