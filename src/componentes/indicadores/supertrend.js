import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoSuperTrend = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',    
          min: 10, 
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
        },
        legend: {
            data: ['SAR',],
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              
              emphasis: {
                focus: 'series'
              },
              data: [10, 10, 10.85, 10.65, 10.70, 11, 11.25, 11.10, 11.5, 11.84, 12, 12.20, 12.25]
            },
            
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', 11, 13.25, 14, 14.25]
            }
        ]
    };


 

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}