import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoAtr = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',
          min: 120, max: 190,
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
        },
        legend: {
            data: ['Preço de Fechamento', 'Stop Long', 'Stop Short'],
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
          {
            data: [180, 160, 175, 150, 178, 170, 130, 150, 167, 144, 156, 141, 138, 125],
            type: 'line',
            color: "blue",
            name: "Preço de Fechamento",
            symbol: "circle",
          },
          {
            data: [150, 165, 140, 168, 160, 120, 140, 157, 124, 146, 131, 128],
            type: 'line',
            color: "green",
            name: "Stop Long",
            symbol: "circle",
            lineStyle: {
                type: 'dashed'
              },
          },
          {
            data: [190, 170, 185, 160, 188, 190, 140, 130, 177, 154, 166, 121, 178, 155],
            type: 'line',
            color: "red",
            name: "Stop Short",
            symbol: "circle",
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
