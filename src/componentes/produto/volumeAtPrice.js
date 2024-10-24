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
          name: 'R$/MWh',
          type: 'value',
          boundaryGap: [0, 0.01],
          
          splitLine:{
            lineStyle:{
              type: 'solid',
              color: "#262c30"
            }
          },
          scale: true,
          axisLine:
          {
            show: true,
            color: "#262c30"
          },    
          axisTick: {
            show: true,
            color: "#262c30"
          },
          axisLabel: { show: true },
          
        },

        yAxis: {
          type: 'category',
          data: ['80', '60', '40', '10', '5', '0'],
          name: '(MWm)',
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