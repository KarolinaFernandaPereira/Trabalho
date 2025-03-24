import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react";

import axios from "axios";

export const GraficoDistribuicaoVolume = () => {

    const [dados, setDados] = useState([]);
    
    const api1 = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api1.get("/principal/bloxplot").then((response) => setDados(response.data));
    }

    useEffect(() => {
        getDados();
    }, []);

   
    let option = {
     
      
      dataset: [
        {
          // prettier-ignore
          source: [
                    
                    dados
                ]
        },
        {
          transform: {
            type: 'boxplot',
            
          }
        },
        {
          fromDatasetIndex: 1,
          fromTransformResult: 1
        }
      ],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: "#262c30"
          }
      },
      },
      yAxis: {
        type: 'value',
        name: 'Volume (MWm)',
        
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: "#262c30"
          }
      },
      },
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          itemStyle: {
            color: "rgb(98, 18, 202)",
            borderColor: 'rgb(140, 135, 219)',
          },
          
          datasetIndex: 1,
          boxWidth: [1000, 1000],
        },
        {
          name: 'outlier',
          type: 'scatter',
          datasetIndex: 2
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