import React from "react";
import EChartsReact from "echarts-for-react"; 





export const GraficoAgressao = () => {
    
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '5%',
          right: '4%',
          bottom: '4%',
          top: '8%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Ago 3', 'Ago 10', 'Ago 17', 'Ago 24', 'Ago 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 2', 'Nov 9', 'Nov 16', 'Nov 23', 'Nov 30'],
            
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {show: false},
            min: -40,
            max: 20,
            interval: 20

          }
          
        ],
        series: [
          {
            name: 'Venda',
            type: 'bar',
            barWidth: '20%',
            data: [10, 0, 20, 12, 15, 2, 3, 4, 8, 20, 11, 9, 7, 14, 1, 2, 19, 17, 6, 9, 3, 8, 20],
            color: "red"
          },
          {
            name: 'Compra',
            type: 'bar',
            barWidth: '20%',
            data: [-10, -25, -3, -6, -18, -35, -40, -9, -17, -11, -6, -8, -19, -29, -36, -31, -9, -40, -26, -7, -19, -28, -38],
            color: "green"
          }
        ]
      };
    
    
    
    return (
        <EChartsReact option={option} aspect={2} style={{height: '5rem'}}/>
    )
}






