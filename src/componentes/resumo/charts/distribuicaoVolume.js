import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react";

import axios from "axios";

export const GraficoDistribuicaoVolume = () => {

    const [dados, setDados] = useState([]);
    
    const api1 = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api1.get("/principal/distri").then((response) => setDados(response.data));
    }

    useEffect(() => {
        getDados();
    }, []);

    var aux = 0;
    var somaVolume = []
    var datas = []

    dados.map((item) => {
      item.volume.map((item) => {
        aux = aux + item

        
      })

      datas.push(item.data)
      somaVolume.push(aux)
      aux = 0
    })

    console.log(datas)


    var dado1 = []
    var dado2 = []

    somaVolume.map((item) => {
      dado1.push(item/2)
      dado2.push((item/2) * -1)
    })

    

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
            data: datas,
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
            data: dado1,
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
            data: dado2,
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