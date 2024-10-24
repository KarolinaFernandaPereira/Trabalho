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
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
            min: 0,
            max: 200,
            interval: 100,

        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: [200, 0, 105, 80, 60, 40, 20, 0, 50, 20, 110, 50, 100, 20, 40, 50, 100, 130, 140, 150, 200, 0, 50],
                type: 'bar',
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




