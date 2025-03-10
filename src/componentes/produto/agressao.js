import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; 
import axios from "axios";


export const GraficoAgressao = () => {
    
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

    dados.map((item) => {
      datas.push(item.data)
      venda.push(item.venda * -1)
      compra.push(item.compra)
    })
  
  
  
  const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '5%',
          right: '4%',
          bottom: '4%',
          top: '8%'
        },
        xAxis: [
          {
            type: 'category',
            data: datas,
            
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: "#262c30"
              }
            },
            

          }
          
        ],
        series: [
          {
            name: 'Venda',
            type: 'bar',
            barWidth: '20%',
            data: venda,
            color: "red"
          },
          {
            name: 'Compra',
            type: 'bar',
            barWidth: '20%',
            data: compra,
            color: "green"
          }
        ]
  };
    
  return (
      <EChartsReact option={option} aspect={2} style={{height: '5rem'}}/>
  )
}






