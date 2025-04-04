import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import * as echarts from 'echarts';
import axios from "axios";

export const GraficoPrecos = () => {
  //eixo x, eixo y, tamanho, nome, 

  const [dado1, setDados1] = useState()
  const [dado2, setDados2] = useState()

  const api = axios.create({
    baseURL: "http://localhost:3030"
  })

  const getCompra = async () => {
    await api.get("principal/preco_compra").then((response) => setDados1(response.data));
  }

  const getVenda = async () => {
    await api.get("/principal/preco").then((response) => setDados2(response.data));
  }


  useEffect(() => {
          
    getCompra();
    getVenda();

  }, []);

  const data = [
    dado1,
    dado2
  ];

  console.log(data)

  const option = {
    backgroundColor: "#131618",
    title: {
      show: false,
    },
    legend: {
      right: '10%',
      top: '3%',
      data: ['Compra', 'Venda'],
      textStyle: {
          color: "rgb(165, 165, 165)",
      }
    },
    grid: {
      left: '7%',
      right: '2%',
      top: '10%',
      bottom: '13%'
    },
    xAxis: {
      axisTick: { show: false },
      axisLabel: { show: true },
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: "#262c30"
        }
      }
    },
    yAxis: {
      axisTick: { show: false },
      axisLabel: { show: true },
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: "#262c30"
        }
      },
      scale: true
    },
    series: [
      {
        name: 'Compra',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 2e2; //Define o tamanho da bolha
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          color: "green",
        }
      },
      {
        name: 'Venda',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 2e2;
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          color: "red",
        }
      },
    ]
  };

    return (
        <>
            <EChartsReact option={option} style={{height: '23.5rem'}}/>
        </>
    );
}