import React, { useState } from "react";
import EChartsReact from "echarts-for-react";
import { Legend } from "chart.js";

export const BollingerBandsArea = () => {
    // Dados de exemplo - substitua pelos seus dados reais
    const data = {
      dates: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2'],
      
    };
  
    const option = {
      xAxis: {
        
        type: 'category',
        data: ['2022-1', '2022-2', '2022-3', '2022-4', '2022-05', '2022-6', '2022-7', '2022-8', '2022-09', '2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
      
        
      },
      yAxis: {
        type: 'value',
        
        min: 100, 
        splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
        },
      },
      grid: {
        left: '3%',
        right: '2%',
        bottom: '25%',
        top: '20%'
      },
      legend: {textStyle: {
        color: "rgb(165, 165, 165)",
    }},
      tooltip : {},
      series: [
        
        {
          name: 'Preço de Fechamento',
          type: 'line',
          color: 'blue',
          
          data: [182, 172, 175, 168, 220, 165, 250, 170, 177, 195, 200, 180, 182, 190],
          symbol: 'none',
          
        },
        
        {
          name: 'Média Móvel Simples (SMA)',
          type: 'line',
          color: 'yellow',
          data: ['-', '-', 250, 188, 195, 240, 215, 200, 225, 197, 282, 199, 282, 299],
          symbol: 'none',
          
        },
        // Área sombreada entre as bandas
        {
          //Linha de baixo
          name: 'Banda Inferior',
          type: 'line',
          data: ['-',  '-', 145, 155, 160, 145, 166, 172, 160, 148.2, 175, 159, 167, 172],
          areaStyle: {
            opacity: 0,
            color: 'red'
          },
          lineStyle: {
            type: 'dashed',
          },
          stack: 'confidence-band',
          symbol: 'none'
        },
        {
          //Linha de cima
          name: 'Banda Superior',
          type: 'line',
          color: 'green',
          data: ['-',  '-', 165, 170, 165, 160, 155, 158, 152, 148, 150, 142, 138, 147],
          areaStyle: {
            opacity: 0.2,
            color: '#73c0de'
          },
          lineStyle: {
            type: 'dashed',
          },
          stack: 'confidence-band',
          symbol: 'none'
        }
      ]
    };
  
    return (
      <div>
        <EChartsReact 
          option={option}
        />
      </div>
    );
  };