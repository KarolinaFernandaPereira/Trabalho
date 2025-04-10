import React from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache

export const GraficoSwap02 = () => {

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
        legend: {textStyle: {
            color: "rgb(165, 165, 165)",
        }},
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
                name: "SWAP",
                data: [17, 10, 6, 20, 11, 18, 46, 40, 38, 17],
                color: "white",
                type: 'line',
                showSymbol: "circle",
                itemStyle: { opacity: 0 }
            },
            {
                name: "MM15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 4, 15, 18, 30],
                color: "yellow",
                type: 'line',
                showSymbol: "circle",
                itemStyle: { opacity: 0 }
            },
            {
                name: "BBL15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 23, 30, 45, 47],
                color: "grey",
                type: 'line',
                showSymbol: "circle",
                itemStyle: { opacity: 0 }
            },
            {
                name: "BBU15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 12, 5, 7, 6],
                color: "gray",
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