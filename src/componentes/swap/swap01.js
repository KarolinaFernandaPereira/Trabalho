import React, { useState } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoSwap01 = () => {

    const option = {
        xAxis: {
            type: 'category',
            data: ["MAR 2023", "ABR 2023","MAY 2023","JUN 2023","JUL 2023","AGO 2023","SEP 2023","OUT 2023","NOV 2023","DEZ 2023"],
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                type: 'solid',
                color: "#262c30"
                    },
            },
        },
        legend: {
            bottom: 1,
            textStyle: {
            color: "rgb(165, 165, 165)",
        }},
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
                name: "SE CON ANU JAN/24 DEZ/24",
                data: [124, 100, 105, 85, 69, 71, 80, 64, 96, 115],
                color: "red",
                type: 'line',
                showSymbol: "circle",
                itemStyle: { opacity: 0 }
            },
            {
                name: "SE CON ANU JAN/25 DEZ/25",
                data: [122, 92, 85, 79, 99, 112, 70, 66, 77, 100],
                color: "green",
                type: 'line',
                showSymbol: "circle",
                itemStyle: { opacity: 0 }
            },
        ]
    }

    return(
        <>
            <EChartsReact option={option}/>
        </>
    )
}