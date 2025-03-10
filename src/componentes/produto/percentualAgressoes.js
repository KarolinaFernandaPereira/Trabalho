import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import { color } from "chart.js/helpers";

import axios from "axios";

export const GraficoPercentualAgressoes = () => {


    const [dados, setDados] = useState([]);

    const api1 = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api1.get("/principal/agressao").then((response) => setDados(response.data));
    }

    useEffect(() => {
        getDados();
    }, []);


    const datas = []
    const venda = []
    const compra = []


    dados.map((item) => {
      
        datas.push(item.data)
    
        venda.push(parseInt(item.venda))
        compra.push(parseInt(item.compra))
    
        
    })


    const rawData = [
        venda,
        compra,
    ];

    const totalData = [];

    for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
            }
        totalData.push(sum);
    }

    const grid = {
        left: 85,
        right: 5,
        top: 50,
        bottom: 50
    };

    const series = [
        'Compra_green',
        'Venda_red',
    ].map((name, sid) => {
        const cor = name.split("_")
        return {
            name: cor[0],
            color: cor[1],
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
            label: {
                show: false,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did])
        };
    });
    
    const option = {
            grid,
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                      type: 'solid',
                      color: "#262c30"
                    }
                },
            },
            xAxis: {
                type: 'category',
                data: datas
            },
            tooltip : {

            },
            legend: {
                data: ['Compra', 'Venda'],
                textStyle: {
                  color: "rgb(165, 165, 165)",
              }
            },
            series,
            splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: "#262c30"
                }
            },
    }

    return (
        <>
            <EChartsReact option={option}/>
        </>
    )
}