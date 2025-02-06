import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import axios from "axios";


export const GraficoVolumeAtPrice = () => {

    const [dados, setDados] = useState([]);
    const api = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api.get("/principal/listar").then((response) => setDados(response.data));
    }

    useEffect(() => {
        getDados();
    }, []);

    const y = [];
    const x = [];

    dados.map((dado) => {
      y.push(dado.quantidadeHora)
      x.push(dado.preco)
    })

    const conjunto = new Set(x);

    const listaElementosUnicos = Array.from(conjunto);
    
    const series1 = []
    let vendaList = []
    let compraList = []

    dados.map((dado) => {
      if(dado.tendencia == "Venda"){
        vendaList.push(parseInt(dado.quantidadeHora))
        
      } else {
        compraList.push(parseInt(dado.quantidadeHora))
      }
    })

    
    const compra = compraList.reduce((accumulator,value) => accumulator + value,0);
    var venda = vendaList.reduce((accumulator,value) => accumulator + value,0);

    series1.push(
      {
        name: 'Venda',
        type: 'bar',
        data: venda,
        color: "red",
      }
    )

    series1.push(
      {
        name: 'Compra',
        type: 'bar',
        data: compra,
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
        data: y,

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
        inverse: true
      },

      

      series: series1
    };
    
    console.log(venda)

    
    return (
        <>
            <EChartsReact option={option} style={{height: '22.8rem'}}/>
        </>
    );
}