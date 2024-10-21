import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache


export const GraficoVolume = () => {
    
    
    const option = {
        xAxis: {
            type: 'category',
            data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30']
            
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            top: '8%'
        },
        
        yAxis: {
            type: 'value',
            splitLine: {show: false},
            min: 0,
            max: 200,
            interval: 100,

        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: [0, 0, 10, 8, 6, 4, 2, 0, 0, 2, 1, 50, 100, 2, 40, 50, 100, 130, 140, 150, 200, 0, 50],
                type: 'line',
                showSymbol: false,
                color: "gray"
            }
        ]
    };    
    
    
    return (
        <>
            <EChartsReact option={option} aspect={2} style={{height: '5rem'}}/>
        </>
    )
}




