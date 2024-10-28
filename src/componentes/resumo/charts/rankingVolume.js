import React from "react";
import EChartsReact from "echarts-for-react";


export const GraficoRankingVolume = () => {

    const option = {
        tooltip: {},
        legend: {},
        grid: {
            right: '2%',
            top: '20%',
            left: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: [
            'SE CON MEN NOV/23',
            'SE CON MEN DEZ/23',
            'SE CON MEN NOV/23 - Spread',
            'SE CON MEN JAN/24',
            'SE I5 MEN NOV/21 - Spread',
            'SE CON SEM JAN/24 JUN/24',
            'SE CON ANU JAN/26 DEZ/26',
            'SE CON ANU JAN/24 DEZ/24',
            'SE CON ANU JAN/25 DEZ/25',
            'SE CON TRI JAN/24 MAR/24'
            ]
        },
        series: [
            {
                name: 'Ag. venda',
                type: 'bar',
                stack: 'total',
                color: 'red',
                emphasis: {
                    focus: 'series'
                },
                data: [102, 25, 17, 0, 0, 25, 5, 7, 4, 4]
            },
            {
                name: 'Ag. Compra',
                type: 'bar',
                stack: 'total',
                color: 'green',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 1, 4, 21, 26, 15, 10, 5, 4, 4]
            }
        ]
    };

    return (
        <>
            <EChartsReact option={option} />
        </>
    )
}