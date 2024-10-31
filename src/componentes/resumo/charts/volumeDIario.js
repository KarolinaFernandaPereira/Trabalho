import React from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoMapaVolumeDiario = () => {

    const option = {

        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [10, 20145, 'SE CON MEN DEZ/22'],
            [100, 12755, 'SE CON SEM JAN/24 DEZ/24'],
            [100, 41032, 'SE CON TRI ABR/24 JUN/24'],
            [10, 78254, 'SE CON ANU JAN/26 DEZ/26'],
            [100, 58212, 'SE CON ANU JAN/25 DEZ/25'],
          ]
        },
        grid: { containLabel: true },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
        },
        xAxis:
        {
            name: 'amount',
        },
        yAxis: {
            type: 'category',
            data: [
                'SE CON MEN DEZ/22',
                'SE CON SEM JAN/24 DEZ/24',
                'SE CON TRI ABR/24 JUN/24',
                'SE CON ANU JAN/26 DEZ/26',
                'SE CON ANU JAN/25 DEZ/25',
            ],
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
          dimension: 0,
          inRange: {
            color: ['#70004f', '#00a767', '#fbff00']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
            y: 'product'
            }
          },
        ],
      };

    return (

        <>
            <span style={{fontSize: "small"}}> Total: 14.0 MWm | Compra: 0.0 Mwm (0.0%) | Venda: 14.0 MWm (100.0%) </span>
            <EChartsReact option={option} />
        </>
    )
}