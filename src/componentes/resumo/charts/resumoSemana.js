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
                data: [79],
                type: 'line',
                color: 'red'
            },
            {
                data: [81],
                type: 'line',
                color: '#fff'
            },
            
            {
                data: [83],
                type: 'line',
                color: 'gray'
            }
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
                color: 'white'
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
                data: [114],
                type: 'line',
                color: 'red'
            },
            {
                data: [117],
                type: 'line',
                color: 'white'
            }
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
                data: [79],
                type: 'line',
                color: 'red'
            },
            {
                data: [82],
                type: 'line',
                color: 'white'
            }
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
                data: [100],
                type: 'line',
                color: 'red'
            },
            {
                data: [108],
                type: 'line',
                color: 'white'
            }
        ]
    };
    

    return (
        <>
            <div style={{height: '101px'}}>

                <EChartsReact option={option} />
            </div>
            <div style={{height: '101px'}}>

                <EChartsReact option={option2}/>
            </div>
            <div style={{height: '101px'}}>

                <EChartsReact option={option3}/>
            </div>
            <div style={{height: '101px'}}>

                <EChartsReact option={option4}/>
            </div>
            <div style={{height: '101px'}}>

                <EChartsReact option={option5}/>
            </div>
           
        </>
    )
}