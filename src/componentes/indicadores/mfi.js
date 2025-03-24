import React, { useState } from "react";
import EChartsReact from "echarts-for-react";



export const GraficoRsi = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',
          min: 0, max: 80,
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
        },
        legend: {
            data: ['RSI',],
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
          {
            data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            type: 'line',
            color: "green",
            showSymbol: false,
            lineStyle: {
                type: 'dashed'
              },
          }
        ]
    };

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}