import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoSupertrendNew = () => {

    const option = {
        xAxis: {
            data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2', '2023-3', '2023-4', '2023-05', '2023-6', '2023-7', '2023-8', '2023-09', '2023-10', '2023-11', '2023-12', '2024-1', '2024-2',  
                    '2024-3', '2024-4', '2024-05', '2024-6', '2024-7', '2024-8', '2024-09', '2024-10', '2024-11', '2024-12', '2025-1', '2025-2', '2025-3', '2025-4', '2025-05', '2025-6', '2025-7', '2025-8', '2025-09', '2025-10', '2025-11', '2025-12', '2026-1', '2026-2', '2026-3', '2026-4'],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
          {
            type: 'candlestick',
            data: [
                [50, 40, 37, 53],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 10, 42],
                [35, 30, 28, 40],  
                [35, 42, 28, 45],  
                [30, 45, 22, 50],  
                [42, 20, 15, 45],  
                [28, 38, 20, 40],  
                [42, 32, 30, 50],  
                [33, 48, 25, 55],  
                [45, 58, 40, 60],  
                [38, 52, 30, 55],  
                [40, 35, 30, 50],
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42],
                [35, 30, 15, 47],  
                [35, 50, 28, 55],  
                [30, 45, 22, 50],  
                [42, 20, 15, 45],  
                [28, 38, 20, 40],  
                [42, 32, 30, 50],  
                [33, 48, 25, 55],  
                [45, 58, 40, 60],

                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 10, 42],
                [35, 30, 28, 40],  
                [35, 42, 28, 45],  
                [30, 45, 22, 50],  
                [42, 20, 15, 45],  
                [28, 38, 20, 40],  
                [42, 32, 30, 50],  
                [33, 48, 25, 55],  
                [45, 58, 40, 60],  
                [38, 52, 30, 55],  
                [40, 35, 30, 50],
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42],
                [35, 30, 15, 47],  
                [35, 50, 28, 55],  
                [30, 45, 22, 50],  
                [42, 20, 15, 45],  
                [28, 38, 20, 40],  
                [42, 32, 30, 50],  
                [33, 48, 25, 55],  
                [45, 58, 40, 60],
            ],
            itemStyle: {
                color: 'green',
                color0:  'red',
                borderColor: 'green',
                borderColor0: 'red',
            },
          },
          {
            name: "SupertrendVermelho",
            type: 'line',
            symbol: "circle",
            areaStyle: {
                opacity: 0.2,
            },
            color: "red",
            symbolSize: 6,
            showSymbol: false,
            stack: 'Total',
            emphasis: {
                focus: 'series'
            },
            data: [58, 55, 47, 45, 42,],
            inverse: true,
          },

        ]
    };

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}