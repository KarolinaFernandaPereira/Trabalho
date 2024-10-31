import React from 'react';
import EChartsReact from 'echarts-for-react';
import { color } from 'chart.js/helpers';



export const GraficoHistoricoAgressoes = () => {
    
    var series = [
      {
        data: [230, 132, 0, 0, 90, 230, 210, 0, 132, 101, 134, 90, 230, 210, 100, 2, 301, 0, 390, 33, 320, 0, 302, 301, 334, 390, 330, 320],
        type: 'bar',
        stack: 'total',
        name: 'Venda',
        color: 'green'

      },
      {
        data: [100, 302, 0, 0, 390, 330, 320, 0, 302, 0, 334, 30, 330, 0, 320, 132, 101, 14, 90, 230, 210, 0, 132, 101, 134, 90, 230, 210],
        type: 'bar',
        stack: 'total',
        name: 'Compra',
        color: 'red'
      },
        
      ];
      
      const option = {
        xAxis: {
          type: 'category',
          data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30'],
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
          },
        },
        tooltip : {

        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
          },
        },
        series: series,
        legend: {
          data: ['Compra', 'Venda'],
          textStyle: {
              color: "rgb(165, 165, 165)",
          }
        },
    };
    
    return (
        <>
            <EChartsReact option={option} />
        </>
    )
}