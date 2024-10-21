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
            name: 'Compra',
            type: 'bar',
            data: [18, 23, 29, 10, 13, 63],
            color: "red",
          },
          {
            name: 'Venda',
            type: 'bar',
            data: [19, 23, 31, 12, 13, 68],
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