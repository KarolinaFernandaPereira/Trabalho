import React from 'react';
import EChartsReact from 'echarts-for-react';
import { color } from 'chart.js/helpers';



export const GraficoHistoricoAgressoes = () => {
    
    var series = [
        {
          data: [100, 302, 301, 334, 390, 330, 320, 100, 302, 301, 334, 390, 330, 320, 320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90, 230, 210],
          type: 'bar',
          stack: 'Venda',
          name: 'Venda',
          color: 'red'
        },
        {
          data: [320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90, 230, 210, 100, 302, 301, 334, 390, 330, 320, 100, 302, 301, 334, 390, 330, 320],
          type: 'bar',
          stack: 'Venda',
          name: 'Compra',
          color: 'green'

        },
      ];
      
      
      const option = {
        xAxis: {
          type: 'category',
          data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30']
        },
        yAxis: {
          type: 'value'
        },
        series: series
    };
    
    return (
        <>
            <EChartsReact option={option} />
        </>
    )
}