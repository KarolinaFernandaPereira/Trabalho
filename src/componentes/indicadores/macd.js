import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoMacd = () => {
  /*
    
  const data = [
      [ -1, '2022-1', 100],
      [ -2, '2022-2'],
      [ -3, '2022-3'],
      [ -4, '2022-4'],
      [ -5, '2022-5'],
      [ -4, '2022-6'],
      [ -3, '2022-7'],
      [ -2,'2022-8'],
      [ -1, '2022-9'],
      [ 0, '2022-10'],
      [ 1, '2022-11'],
      [ 2, '2022-12'],
      [ 3, '2023-1'],
      [ 4, '2023-2'],
      [ 5, '2023-3'],
      [ 5, '2023-4'],
      [ 4, '2023-5'],
      [ 3, '2023-6'],
      [ 3, '2023-7'],
      [ 2,'2023-8'],
      [ 1, '2023-9'],
      [ 0, '2023-10'],
      [ -1, '2023-11'],
      [ -2, '2023-12'],
      [ -3, '2024-1'],
      [ -4, '2024-2'],
      [ -5, '2024-3'],
      [ -4, '2024-4'],
      [ -3, '2024-5'],
      [-2, '2024-6'],
      [ -1, '2024-7'],
      [ 0,'2024-8'],
      [ 2, '2024-9'],
      [ 2, '2024-10'],
      [ 3, '2024-11'],
      [ 4, '2024-12'],
      [ 4, '2025-1'],
      [ 3, '2025-2'],
      [ 2, '2025-3'],
      [ 1, '2025-4'],
      [ 0, '2025-5'],
      [-1, '2025-6'],
      [ -2, '2025-7'],
      [ -3,'2025-8'],
      [ -4, '2025-9'],
      [ -5, '2025-10'],
      [ -4, '2025-11'],
      [ -3, '2025-12'],
      [ -2, '2026-1'],
      [ -1, '2026-2'],
      [ 0, '2026-3'],
  ]
*/
    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12',  
                '2023-1', '2023-2', '2023-3', '2023-4', '2023-05', '2023-6', '2023-7', '2023-8', '2023-09', '2023-10', '2023-11', '2023-12',  
                '2024-1', '2024-2', '2024-3', '2024-4', '2024-05', '2024-6', '2024-7', '2024-8', '2024-09', '2024-10', '2024-11', '2024-12',  
                '2025-1', '2025-2', '2025-3', '2025-4', '2025-05', '2025-6', '2025-7', '2025-8', '2025-09', '2025-10', '2025-11', '2025-12',  
                '2026-1', '2026-2', '2026-3',]
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
            data: [ -4, -5, -5, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 4, 3, 2, 2, 1, 0, -1, -2, -3, -4, -5,  
              -5, -4, -3, -2, -1, 0, 1, 2, 3, 3, 3, 2, 1, 0, -1, -2, -3, -4, -5, -5, -4, -3, -2, -1, 0 ],
            type: 'line',
            color: "blue",
            name: "MACD",
            symbol: "circle",
          },
          {
            data: [-2, -3, -4, -5, -5, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 4, 3, 2, 2, 1, 0, -1, -2, -3, -4, -5,  
              -5, -4, -3, -2, -1, 0, 1, 2, 3, 3, 3, 2, 1, 0, -1, -2, -3, -4, -5, -5, -4, -3, -2, -1, 0 ],
            type: 'line',
            color: "red",
            name: "Signal",
            symbol: "circle",
            lineStyle: {
                type: 'dashed'
              },
          },
          {
            data: [-1, -2, -3, -4, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 5, 4, 3, 3, 2, 1, 0, -1, -2, -3, -4,  
              -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2, -1, 0, 1],
            type: 'bar',
            color: "grey",
            name: "Venda",
          },
        ]
    };

    return (
        <>
            <EChartsReact option={option} aspect={2} style={{height: '8rem'}}/>
        </>
    )
}