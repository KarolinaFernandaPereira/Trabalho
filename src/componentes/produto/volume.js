import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; //Gráficos Apache
import axios from "axios";

export const GraficoVolume = () => {

    const [dados1, setDados1] = useState([]);

    const api1 = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api1.get("/principal/volume").then((response) => setDados1(response.data));
    }

    useEffect(() => {
        getDados();
    }, []);

    console.log(dados1)

    const datas = []
    const valores = []

    dados1.map((item) => {
        datas.push(item.data)
        valores.push(item.count)
    })
    
    

    const option = {
        xAxis: {
            type: 'category',
            data: datas,
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            top: '8%'
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
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                data: valores,
                type: 'bar',
                showSymbol: false,
                color: "gray"
            }
        ]
    };    
    
    
    return (
        <>
            <EChartsReact option={option} aspect={2} style={{height: '5rem'}}/>
        </>
    )
}




