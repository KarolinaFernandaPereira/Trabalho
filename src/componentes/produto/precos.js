import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoPrecos = () => {

    const dataBJ = [
        [1, 55, 9, 56, 0.46, 18, 6, 'A'],
        [2, 25, 11, 21, 0.65, 34, 9, 'B'],
    ];

    const dataGZ = [
        [1, 26, 37, 27, 1.163, 27, 13, 'C'],
        [2, 85, 62, 71, 1.195, 60, 8, 'D'],
    ];

    const dataSH = [
        [1, 91, 45, 125, 0.82, 34, 23, 'E'],
        [2, 65, 27, 78, 0.86, 45, 29, 'F'],
    ];

    const schema = [
        { name: 'date', index: 0, text: '日' },
        { name: 'AQIindex', index: 1, text: 'AQI指数' },
        { name: 'PM25', index: 2, text: 'PM2.5' },
        { name: 'PM10', index: 3, text: 'PM10' },
        { name: 'CO', index: 4, text: '一氧化碳（CO）' },
        { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
        { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
    ];

    const itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.3)'
    };

    const option = {
        color: ['#dd4444', '#fec42c', '#80F1BE'],
        legend: {
          top: 10,
          data: ['ABC', 'DEF', 'GHI'],
          textStyle: {
            fontSize: 16
          }
        },
        grid: {
          left: '10%',
          right: 150,
          top: '18%',
          bottom: '10%'
        },
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                      + param.seriesName + ' ' + value[0] + 'CADEIRA:'
                      + value[7]
                      + '</div>'
                      + schema[1].text + '：' + value[1] + '<br>'
                      + schema[2].text + '：' + value[2] + '<br>'
                      + schema[3].text + '：' + value[3] + '<br>'
                      + schema[4].text + '：' + value[4] + '<br>'
                      + schema[5].text + '：' + value[5] + '<br>'
                      + schema[6].text + '：' + value[6] + '<br>';
          }
        },
        xAxis: {
          type: 'value',
          name: 'ALI',
          nameGap: 16,
          nameTextStyle: {
            fontSize: 16
          },
          max: 31,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          
        },
        series: [
          {
            name: 'ABC',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
          },
          {
            name: 'DEF',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSH
          },
          {
            name: 'GHI',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
          }
        ]
    };

    return (
        <>
            <EChartsReact option={option}/>
        </>
    );
}