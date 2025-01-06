import React from "react";
import EChartsReact from "echarts-for-react";



export const GraficoResumoSemana = () => {

    

    const option = {
        
        xAxis: {
            type: 'value',
            min: 78,
            max: 83,
            interval: 1,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['SE SEM JUL/24 DEZ/24'],
            
        },
        tooltip: {},
        
        series: [
            {
                //início
                data: [78],
                type: 'line',
                color: 'red',
                symbolSize: 10, symbol: "circle",
            },
            {
                //número do meio
                data: [82],
                type: 'line',
                color: 'white',
                symbolSize: 10, symbol: "circle",
            },
            {
                //linha
                data: [78, 83],
                type: 'line',
                color: 'gray',
                symbolSize: false,
            },
            {
                //último
                data: [83],
                type: 'line',
                color: 'gray',
                symbolSize: 10, symbol: "circle",
            },
        ],
        grid: {
            left: '24%',
            right: '10%',
            bottom: '80%',
            top: '20%'
        },
    };

    const option2 = {
        xAxis: {
            type: 'value',
            min: 66.5,
            max: 68.5,
            interval: 0.5,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['CON TRI ABR/24 JUN/24'],
            
        },
        tooltip: {},
        grid: {
            left: '26%',
            right: '10%',
            bottom: '80%',
            top: '20%'
        },
        series: [
            {
                data: [67.5],
                type: 'line',
                color: 'gray',
                symbolSize: 10, symbol: "circle",
            }
        ]
    };

    const option3 = {
        xAxis: {
            type: 'value',
            min: 114,
            max: 118,
            interval: 1,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['CON ANU JAN/26 DEZ/26'],
            
        },
        tooltip: {},
        grid: {
            left: '27.%',
            right: '10%',
            bottom: '80%',
            top: '20%'
        },
        series: [
            {
                //início
                data: [114],
                type: 'line',
                color: 'red',
                symbolSize: 10, symbol: "circle",
            },
            {
                //número do meio
                data: [117],
                type: 'line',
                color: 'white',
                symbolSize: 10, symbol: "circle",
            },
            {
                //linha
                data: [114, 118],
                type: 'line',
                color: 'gray',
                symbolSize: false,
            },
            {
                //último
                data: [118],
                type: 'line',
                color: 'gray',
                symbolSize: 10, symbol: "circle",
            },
        ]
    };


    const option4 = {
        xAxis: {
            type: 'value',
            min: 79,
            max: 82,
            interval: 1,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['SE CON MEN DEZ/23'],
            
        },
        tooltip: {},
        grid: {
            left: '23%',
            right: '10%',
            bottom: '80%',
            top: '20%'
        },
        series: [
            {
                //início
                data: [79],
                type: 'line',
                color: 'red',
                symbolSize: 10, symbol: "circle",
            },
            {
                //linha
                data: [78, 82],
                type: 'line',
                color: 'gray',
                symbolSize: false,
            },
            {
                //último
                data: [82],
                type: 'line',
                color: 'gray',
                symbolSize: 10, symbol: "circle", symbol: "circle",
            },
        ]
    };


    const option5 = {
        xAxis: {
            type: 'value',
            min: 100,
            max: 108,
            interval: 2,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['CON ANU JAN/25 DEZ/25'],
            
        },
        tooltip: {},
        grid: {
            left: '27%',
            right: '10%',
            bottom: '80%',
            top: '20%'
        },
        series: [
            {
                //início
                data: [100],
                type: 'line',
                color: 'red',
                symbolSize: 10, symbol: "circle", symbol: "circle",
            },
            {
                //linha
                data: [100, 108],
                type: 'line',
                color: 'gray',
                symbolSize: false,
            },
            {
                //último
                data: [108],
                type: 'line',
                color: 'gray',
                symbolSize: 10, symbol: "circle", symbol: "circle",
            },
        ]
    };
    

    return (
        <>
            <div style={{height: '88px'}}>

                <EChartsReact option={option} />
            </div>
            <div style={{height: '88px'}}>

                <EChartsReact option={option2}/>
            </div>
            <div style={{height: '88px'}}>

                <EChartsReact option={option3}/>
            </div>
            <div style={{height: '88px'}}>

                <EChartsReact option={option4}/>
            </div>
            <div>

                <EChartsReact option={option5} style={{height: '88px', paddingTop:  '45px'}}/>
            </div>
           
        </>
    )
}