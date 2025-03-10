import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react";

import axios from "axios";

export const GraficoDistribuicaoVolumeCompra = () => {

    const [dados, setDados] = useState([]);
    const [datas, setDatas] = useState([]);

    const api1 = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
      await api1.get("/principal/distriCompra").then((response) => setDados(response.data));
      await api1.get("/principal/distri").then((response) => setDatas(response.data));
    }
    
    

    useEffect(() => {
        getDados();
        
    }, []);

    

    var datas1 = []
    var venda = []
    var compra = []


    var com1 = 0
    var com2 = 0

    dados.map((item) => {
      
      
      venda.push(item.venda * -1)
      compra.push(item.compra)
    
    })
    
    console.log(venda)
    

    datas.map((item) => {
      

      datas1.push(item.data)
      
    })
    
    const resultado = datas1.filter(item => item !== undefined);

    const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Quantidade de Negócio'],
          textStyle: {
            color: "rgb(98, 18, 202)",
        }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
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
        yAxis: [
          {
            type: 'category',
            axisTick: {
                show: false,
            },
            data: resultado,
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
            name: 'Quantidade de Negócio',
            
            color: "rgb(98, 18, 202)",
            type: 'bar',
            stack: 'Total',
            label: {
              show: false
            },
            data: compra,
          },
          {
            name: 'Quantidade de Negócio',
            
            color: "rgb(98, 18, 202)",
            type: 'bar',
            stack: 'Total',
            label: {
              show: false,
              position: 'left'
            },
            data: venda,
          }
        ]
    };

    return (

        <>
            <EChartsReact option={option} />
            <span style={{fontSize: "small"}}> Volume Total: 342.60 MWm </span>
        </>
    )
}