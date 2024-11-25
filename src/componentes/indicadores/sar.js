import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoSar = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',
          min: 9, max: 12,
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
            data: [10, 10.25, 10.5, 11, 10.25, 10.75, 11, 11.35, 11.5, 11.75, 11.55, 12, 12.25],
            type: 'line',
            color: "blue",
            name: "High",
            symbol: "circle",
          },
          {
            data: [9.5, 9.60, 10, 9.85, 9.95, 10.35, 10.40, 10.5, 10.65, 11, 11.48, 11.5, 11.65],
            type: 'line',
            color: "yellow",
            name: "Low",
            showSymbol: false,
            
          },
          {
            data: [9.5, 9.5, 9.5, 9.55, 9.65, 9.95, 10, 10.05, 10.20, 10.30, 10.45, 10.48, 10.5],
            type: 'line',
            color: "green",
            showSymbol: false,
            name: "SAR",
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