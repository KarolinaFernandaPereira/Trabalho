import React from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoMapaLinhaVol = () => {

    const option = {
        xAxis: {
            name: 'Nov 23, 2023',
            type: 'category',
            data: ["09:00", "09:01", "09:02", "09:03", "09:04", "09:05", "09:06", "09:07", "09:08", "09:09", 
                "09:10", "09:11", "09:12", "09:13", "09:14", "09:15", "09:16", "09:17", "09:18", "09:19", 
                "09:20", "09:21", "09:22", "09:23", "09:24", "09:25", "09:26", "09:27", "09:28", "09:29", 
                "09:30", "09:31", "09:32", "09:33", "09:34", "09:35", "09:36", "09:37", "09:38", "09:39", 
                "09:40", "09:41", "09:42", "09:43", "09:44", "09:45", "09:46", "09:47", "09:48", "09:49", "09:50"],
            
        },
        yAxis: {
            name: 'MWm Acum.',
            type: 'value',
            
            splitLine: {
                lineStyle: {
                type: 'solid',
                color: "#262c30"
                },
            },
            min: 0,
            max: 15,
            interval: 5,
            
            
        },
        grid: {
            left: '15%',
            right: '4%',
            bottom: '25%',
            top: '8%'
        },
        responsive: true,
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
                name: "VENDA",
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8,8, 9, 10, 10, 10, 10, 10, 10, 10, 12, 14, 14, 14, 15, 15, 15, 15],
                color: "red",
                type: 'line',
                symbol: "circle",
            },
            {
                name: "COMPRA",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0],
                color: "green",
                type: 'line',
                symbol: "circle",
            },
        ]
    }

    return (

        <div>
            <EChartsReact option={option} aspect={2} style={{height: '5rem'}}/>
        </div>
    )
}