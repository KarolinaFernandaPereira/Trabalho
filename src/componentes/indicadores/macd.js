import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoMacd = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',
          min: -5, max: 5, interval: 5,
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
        },
        legend: {
            data: ['MACD', 'Signal',],
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '25%',
            top: '20%'
        },
        series: [
          {
            data: [0, 4, -2, 5, 3, 1, -5, 5, -2, 0, 0, -3, 1, 2],
            type: 'line',
            color: "blue",
            name: "MACD",
            symbol: "circle",
          },
          {
            data: [0, 0, 1, 1, -1, 0, 4, 3, -5, 4, 5, -2, 1, 5],
            type: 'line',
            color: "red",
            name: "Signal",
            symbol: "circle",
            lineStyle: {
                type: 'dashed'
              },
          },
          {
            data: [-2, 0, -1, -1, 0, 0, -4, -3, -5, 0, 0, -2, 0, -5],
            type: 'bar',
            color: "red",
            name: "Venda",
          },
          {
            data: [0, 2, 0, 0, 5, 3, 0, 0, 0, 4, 5, 0, 1, 0],
            type: 'bar',
            color: "green",
            name: "Compra",
          }
        ]
    };

    return (
        <>
            <EChartsReact option={option} aspect={2} style={{height: '8rem'}}/>
        </>
    )
}