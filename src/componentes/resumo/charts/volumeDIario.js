import React from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import { GraficoMapaLinhaVol } from "./LinhaVolumeDiario";

export const GraficoMapaVolumeDiario = () => {

  const days = [
    'SE CON MEN DEZ/23', 'SE CON SEM JUL/24 DEZ/24', 'SE CON TRI ABR/24 JUN/24', 'SE CON ANU JAN/26 DEZ/26', 'SE CON ANU JAN/25 DEZ/25'
  ];
  
  const data = [
    [0, 10, 0, 1, 'A', 0],
    [10, 30, 1, 2, 'B', 100],
    [30, 60, 0, 1, 'A', 0],
    [60, 80, 2, 3, 'C', 0],
    [30, 60, 3, 4, 'D', 0],
    [60, 80, 4, 5, 'E', 0],
  ]
  const option = {
    
    tooltip: {},
    xAxis: {
      scale: true,
      max: 100,
      type: 'value',
      splitLine: {
        lineStyle: {
        type: 'solid',
        color: "#262c30"
        },
    },
    },
    grid: {
      right: '5%',
      top: '20%',
      left: '15%',
    },
    yAxis: {
      max: 4,
      type: "category",
      data: days,
      splitLine: {
        lineStyle: {
        type: 'solid',
        color: "#262c30"
        },
    },
    },
    visualMap: {
            left: 'right',
            top: '10%',
            min: 10,
            max: 100,
            text: ['Alto', 'Baixo'],
            textStyle: {
              color: "rgb(165, 165, 165)",
              },
            // Map the score column to color
            inRange: {
              color: ['#70004f', '#00a767', '#fbff00']
            }
          },
    series: [
      {
        type: 'custom',
        renderItem: function (params, api) {
          var yIndex = api.value(2); // Índice categórico do eixo y
          var yPosition = api.coord([0, yIndex])[1]; // Calcula a coordenada y central da categoria
          var barHeight = api.size([0, 1])[1] * 0.6; // Ajusta a altura da barra (0.6 para centralizar)
  
          var xStart = api.coord([api.value(0), yIndex])[0];
          var xEnd = api.coord([api.value(1), yIndex])[0];
          var width = xEnd - xStart;
          
          // Calcula o tamanho e corrige a posição y para o caso de eixos invertidos
         
          
          var style = api.style();
          return {
            type: 'rect',
            shape: {
            x: xStart,
            y: yPosition - barHeight / 2, // Centraliza a barra no eixo y categórico
            width: width,
            height: barHeight // Altura ajustada para não ocupar todo o espaço da categoria
            },
              style: style
          };
        },
        label: {
          show: true,
          position: 'top'
        },
        dimensions: ['fromX', 'toX', 'fromY', 'toY', 'profit', 'score'],
        encode: {
          x: [0, 1],
          y: 2,
          tooltip: [0, 1, 2, 3, 4, 5],
          itemName: 4,
        },
        data: data,
      }
    ]
  };

    return (

        <>
            <span style={{fontSize: "small"}}> Total: 14.0 MWm | Compra: 0.0 Mwm (0.0%) | Venda: 14.0 MWm (100.0%) </span>
            <EChartsReact option={option} />
        </>
    )
}