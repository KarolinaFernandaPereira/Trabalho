import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import axios from "axios";


export const GraficoVolumeAtPrice = () => {

    const [dados, setDados] = useState([]);
   

    var vendaY = 0;
    var compraY = 0;
    var y = [];
    var x = [];

    let vendaList = []
    let compraList = []

    var precos = []

    var listaElementosUnicos = []

    var VendaTeste = []
    var CompraTeste = []
    var c1 = 0
    var v1 = 0

    dados.map((dado) => {
      x.push(dado.preco)

      var filtrado = []

      x.map((dado1) => {
        filtrado = dados.filter((item) => item.preco == dado1)
        
        filtrado.map((dadoFiltrado) => {
          if(dadoFiltrado.tendencia === "Venda"){
            v1 = v1 + parseInt(dadoFiltrado.quantidadeHora)
          } else {
            c1 = c1 + parseInt(dadoFiltrado.quantidadeHora)
          }
        })

        VendaTeste.push(v1)
        CompraTeste.push(c1)
        
        v1 = 0
        c1 = 0
      })
    })
    
    
    
    const conjunto = new Set(x);

    listaElementosUnicos = Array.from(conjunto);
    
    listaElementosUnicos.map((elemento) => {

      precos = dados.filter((item) => item.preco == elemento)

      
    })
    
    
    const series1 = []
    

    var compra = compraList.reduce((accumulator,value) => accumulator + value,0);
    var venda = vendaList.reduce((accumulator,value) => accumulator + value,0);
    
    series1.push(
      {
        name: 'Venda',
        type: 'bar',
        data: VendaTeste,
        color: "red",
      }
    )

    series1.push(
      {
        name: 'Compra',
        type: 'bar',
        data: CompraTeste,
        color: "green",
      }
    )

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Compra', 'Venda'],
        textStyle: {
            color: "rgb(165, 165, 165)",
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        name: 'R$/MWh',
        type: 'value',
        boundaryGap: [0, 0.01],
        data: listaElementosUnicos,

        splitLine:{
          lineStyle:{
            type: 'solid',
            color: "#262c30"
          }
        },
        scale: true,
        axisLine:
        {
          show: true,
          color: "#262c30"
        },    
        axisTick: {
          show: true,
          color: "#262c30"
        },
        axisLabel: { show: true },
        
      },

      yAxis: {
        type: 'category',
        data: listaElementosUnicos,
        name: '(MWm)',
        inverse: true,
        
      },

      

      series: series1
    };
    
    

    
    return (
        <>
            <EChartsReact option={option} style={{height: '22.8rem'}}/>
        </>
    );
}