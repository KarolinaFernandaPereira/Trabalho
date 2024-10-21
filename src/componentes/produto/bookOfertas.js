import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoBookOfertas = () => {

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
      inverse: true,
      splitLine:{ show: false },
      axisLine: { show: false },    
      axisTick: { show: false },
      axisLabel: { show: false },
      
    },

    yAxis: {
      type: 'category',
      data: ['80', '60', '40', '10', '5', '0'],
      inverse: true
    },
    
    series: [
      {
        name: 'Compra',
        type: 'bar',
        data: [203, 489, 340, 970, 744, 230],
        color: "red",
      },
      {
        name: 'Venda',
        type: 'bar',
        data: [325, 438, 310, 594, 141, 807],
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