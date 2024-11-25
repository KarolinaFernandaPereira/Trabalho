import React, { useState } from "react";
import EChartsReact from "echarts-for-react";

export const GraficoMediasMoveis = () => {
    
    const option = {
        xAxis: {
          type: 'category',
          data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
        },
        yAxis: {
          type: 'value',    
          min: 130, max: 190, 
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
        },
        legend: {
            
            textStyle: {
                color: "rgb(165, 165, 165)",
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
            data: [185, 174, 172, 175, 166, 162, 171, 171, 165, 152, 142, 130, 135],
            type: 'line',
            color: "blue",
            name: "Máximas",
            symbol: "circle",
            lineStyle: {
                type: 'dashed'
                },
            },
            {
              data: [175, 164, 162, 165, 156, 152, 161, 161, 155, 142, 132, 140, 145],
              type: 'line',
              color: "red",
              name: "Mínimas",
              symbol: "circle",
              lineStyle: {
                  type: 'dashed'
                },
            },
            {
                data: ['-', '-', '-', 174, 171, 170, 165, 160, 170, 158, 150, 141, 138, 135],
                type: 'line',
                color: "green",
                name: "Média Móvel Máximas (20 períodos)",
                symbol: "circle",
            },
            {
              data: ['-', '-', '-', 164, 161, 160, 155, 150, 160, 148, 140, 131, 138, 135],
              type: 'line',
              color: "yellow",
              name: "Média Móvel Mínima (20 períodos)",
              symbol: "circle",
            }
            
        ]
    };

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}