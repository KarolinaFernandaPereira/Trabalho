import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoVolutidade = () => {


    const options = {
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
            data: ['Volutidade'],
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
          {
            data: [80, 60, 75, 50, 78, 70, 30, 50, 67, 44, 15, 10, 38, 25],
            type: 'line',
            color: "yellow",
            name: "Volutidade",
            symbol: "circle",
          },
          {
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            type: 'line',
            color: "red",
            showSymbol: false,
            lineStyle: {
                type: 'dashed'
              },
          },
          {
            data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            type: 'line',
            color: "green",
            showSymbol: false,
            lineStyle: {
                type: 'dashed'
              },
          },
          {
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            type: 'line',
            color: "blue",
            showSymbol: false,
          }
        ]
    };



    return (
        <div>
            <EChartsReact  option={options} />
        </div>
    );

};