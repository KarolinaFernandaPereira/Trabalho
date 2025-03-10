import React, {useEffect, useState} from 'react';
import EChartsReact from 'echarts-for-react';
import { color } from 'chart.js/helpers';


import axios from "axios";


export const GraficoHistoricoAgressoes = () => {
    
  const [dados, setDados] = useState([]);

  const api1 = axios.create({
      baseURL: "http://localhost:3030"
  })

  const getDados = async () => {
      await api1.get("/principal/agressao").then((response) => setDados(response.data));
  }

  useEffect(() => {
      getDados();
  }, []);  


  const datas = []
  const venda = []
  const compra = []
  
  var cont = 0

  var aux1 = 0
  var aux2 = 0

  dados.map((item) => {
      
    datas.push(item.data)

    venda.push(parseInt(item.venda))
    compra.push(parseInt(item.compra))

    cont = cont + 1
  })


  const grid = {
      left: 100,
      right: 5,
      top: 50,
      bottom: 50
  };

  var series = [
    {
      data: venda,
      type: 'bar',
      stack: 'total',
      name: 'Venda',
      color: 'red'

    },
    {
      data: compra,
      type: 'bar',
      stack: 'total',
      name: 'Compra',
      color: 'green'
    },
      
    ];
      
    const option = {
      grid,
      xAxis: {
        type: 'category',
        data: datas,
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: "#262c30"
          }
        },
      },
      tooltip : {

      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: "#262c30"
          }
        },
      },
      series: series,
      legend: {
        data: ['Compra', 'Venda'],
        textStyle: {
            color: "rgb(165, 165, 165)",
        }
      },
  };
    
  return (
      <>
          <EChartsReact option={option} />
      </>
  )
}