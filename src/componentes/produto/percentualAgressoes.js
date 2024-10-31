import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import { color } from "chart.js/helpers";

export const GraficoPercentualAgressoes = () => {

    const rawData = [
        [100, 302, 301, 334, 390, 330, 320, 100, 302, 301, 334, 390, 330, 320, 320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90, 230, 210],
        [320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90, 230, 210, 100, 302, 301, 334, 390, 330, 320, 100, 302, 301, 334, 390, 330, 320],
    ];

    const totalData = [];

    for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
            }
        totalData.push(sum);
    }

    const grid = {
        left: 100,
        right: 100,
        top: 50,
        bottom: 50
    };

    const series = [
        'Compra_green',
        'Venda_red',
    ].map((name, sid) => {
        const cor = name.split("_")
        return {
            name: cor[0],
            color: cor[1],
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
            label: {
                show: false,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did])
        };
    });
    
    const option = {
            grid,
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                      type: 'solid',
                      color: "#262c30"
                    }
                },
            },
            xAxis: {
                type: 'category',
                data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30']
            },
            tooltip : {

            },
            legend: {
                data: ['Compra', 'Venda'],
                textStyle: {
                  color: "rgb(165, 165, 165)",
              }
            },
            series,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
    }

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}