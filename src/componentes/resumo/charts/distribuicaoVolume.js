import React from "react";
import EChartsReact from "echarts-for-react";

export const GraficoDistribuicaoVolume = () => {

    const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Volume'],
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
            data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],
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
            name: 'Volume',
            color: "rgb(98, 18, 202)",
            type: 'bar',
            stack: 'Total',
            label: {
              show: false
            },
            data: [100, 200, 200, NaN, NaN, 70, 10, 3, 3, 3, 3, NaN, NaN, NaN, 3, NaN, NaN, NaN, NaN, NaN, 3]
          },
          {
            name: 'Volume',
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