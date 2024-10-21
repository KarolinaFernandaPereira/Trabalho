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
          left: '3%',
          right: '4%',
          bottom: '3%',
        },
        xAxis: [
          {
            type: 'category',
            
            show: false
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {show: false}
          }
        ],
        series: [
          {
            name: 'Venda',
            type: 'bar',
            barWidth: '20%',
            data: [10, 52, 200, 334, 390, 330, 220, 15, 22, 120, 235, 140],
            color: "red"
          },
          {
            name: 'Compra',
            type: 'bar',
            barWidth: '20%',
            data: [-10, -52, -200, -310, -90, -230, -220, -14, -36, -78, -110, -50],
            color: "green"
          }
        ]
      };
    
    
    
    return (
        <EChartsReact option={option} />
    )
}






