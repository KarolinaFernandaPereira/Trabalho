import React from "react";
import EChartsReact from "echarts-for-react";



export const GraficoAgressaoAcumulada = () => {

    const options = {
        xAxis: {
            type: 'category',
            data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30'],
            
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '25%',
            top: '8%'
        },
        
        yAxis: {
            type: 'value',
            splitLine: {show: false},
            max: 200,
            min: -100,
            interval: 100
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: [55, -100, -25, 200, 35, 42, 11, -10, 25, -53, 11, 50, 50, -6, 88, -25, 155, 199, -2, 66, 78, 200, 33],
                type: 'line',
                showSymbol: false,
                color: "gray"
            }
        ]
    }

    return (
        <>
            <EChartsReact option={options} aspect={2} style={{height: '5rem'}}/>
        </>        
    )
}