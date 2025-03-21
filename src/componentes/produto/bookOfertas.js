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
    legend: {
      data: ['Compra', 'Venda'],
          textStyle: {
              color: "rgb(165, 165, 165)",
          }
    },
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
      inverse: true,
      name: '(MWm)',
    },
    
    series: [
      {
        name: 'Compra',
        type: 'bar',
        data: [203, 489, 340, 0, 0, 0],
        color: "red",
      },
      {
        name: 'Venda',
        type: 'bar',
        data: [0, 0, 0, 594, 141, 807],
        color: "green",
      }
    ]
  };

    return (
        <>
            <EChartsReact option={option} style={{height: '23rem'}}/>
        </>
    );
}