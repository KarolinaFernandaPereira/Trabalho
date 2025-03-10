import React, { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react"; 
import axios from "axios";



export const GraficoAgressaoAcumulada = () => {


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

    var aux1 = 0
    var aux2 = 0

    

    var cont = 0
    dados.map((item) => {
      


      datas.push(item.data)

      

        if(cont == 0){
          
            venda.push(parseInt(item.venda))
            compra.push(parseInt(item.compra))
          
        } else {
            console.log(venda)
            aux1 = venda[cont - 1] + item.venda
            aux2 = compra[cont - 1] + parseInt(item.compra)
            
            venda.push(aux1)
            compra.push(aux2)
        }

      cont = cont + 1
    })
    
    const vendaFinal = []

    console.log(venda)
    venda.map((dado) => {
        vendaFinal.push(dado * -1)    
    })

    const options = {
        xAxis: {
            type: 'category',
            data: datas,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '25%',
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
                data: compra,
                type: 'bar',
                showSymbol: false,
                color: "green"
            },
            {
                data: vendaFinal,
                type: 'bar',
                showSymbol: false,
                color: "red"
            }
        ]
    }

    return (
        <>
            <EChartsReact option={options} aspect={2} style={{height: '5rem'}}/>
        </>        
    )
}