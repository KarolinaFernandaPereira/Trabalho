import React from "react";
import EChartsReact from "echarts-for-react";

export const GraficoDistribuicaoVolume = () => {

    const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Quantidade de Negócio'],
          textStyle: {
            color: "rgb(165, 165, 165)",
        }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: {
                show: false,
            },
            data: ["5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        }
        ],
        series: [
          {
            name: 'Quantidade de Negócio',
            color: "rgb(98, 18, 202)",
            type: 'bar',
            stack: 'Total',
            label: {
              show: false
            },
            data: [100, 200, 200, NaN, NaN, 70, 10, 3, 3, 3, 3, NaN, NaN, NaN, 3, NaN, NaN, NaN, NaN, NaN, 3]
          },
          {
            name: 'Quantidade de Negócio',
            color: "rgb(98, 18, 202)",
            type: 'bar',
            stack: 'Total',
            label: {
              show: false,
              position: 'left'
            },
            data: [-80, -200, -200, NaN, NaN, -70, -10, -3, -3, -3, -3, NaN, NaN, NaN, -3, NaN, NaN, NaN, NaN, NaN, -3],
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