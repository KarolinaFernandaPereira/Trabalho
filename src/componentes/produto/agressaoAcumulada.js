import React from "react";
import EChartsReact from "echarts-for-react";



export const GraficoAgressaoAcumulada = () => {

    const options = {
        xAxis: {
            type: 'category',
            
            show: false
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        
        yAxis: {
            type: 'value',
            splitLine: {show: false}
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: [0, -10, 8, 1, -25, 35, 110, 20, 25, -53, 11, 50, 50, -6, 88, -25],
                type: 'line',
                showSymbol: false,
                color: "gray"
            }
        ]
    }

    return (
        <>
            <EChartsReact option={options} />
        </>        
    )
}