import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache


export const GraficoVolume = () => {
    
    
    const option = {
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
                data: [0, 10, 8, 1, 25, 35, 1, 20, 2, 5, 11, 50],
                type: 'line',
                showSymbol: false,
                color: "gray"
            }
        ]
    };    
    
    
    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}




