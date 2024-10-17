import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoVolumeAtPrice = () => {

    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          
          splitLine:{ show: false },
          axisLine: { show: false },    
          axisTick: { show: false },
          axisLabel: { show: false },
          
        },

        yAxis: {
          type: 'category',
          data: ['80', '60', '40', '10', '5', '0'],
          name: 'km/s minus 299,000',
          inverse: true
        },
        
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            color: "red",
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            color: "green",
          }
        ]
      };

    return (
        <>
            <EChartsReact option={option}/>
        </>
    );
}