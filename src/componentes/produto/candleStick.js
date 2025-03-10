import React, { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";
import axios from "axios";


export const GraficoCandleStick = ({indicador}) => {

    

    const [optionChart, setOptionChart1] = useState({})
    const [indicadores1, setIndicadores1] = useState([])
    const [key, setKey] = useState(0)

    const [dados, setDados] = useState([]);

    var [datas, setDatas] = useState([]);
    var [grafico, setGrafico] = useState([]);
    var [passa, setPassa] = useState([])

    
    
    const api = axios.create({
        baseURL: "http://localhost:3030"
    })

    const getDados = async () => {
        await api.get("/principal/listarProd").then((response) => setDados(response.data));
    }

    useEffect(() => {
        getDados();
        setKey((prev) => prev + 2);
    }, []);

    
    
    

    var teste = []

    teste.push(grafico)

    
    grafico = []
    
    var listaElementosUnicos = []
    var listaElementosUnicos1 = []

    const conjunto = dados.map(item => item.dataHora.split(" ")[0]);

    listaElementosUnicos = new Set(conjunto);



    const conjunto1 = dados.map(item => item.dataHora);

    listaElementosUnicos1 = new Set(conjunto1);
    const lista1 = Array.from(listaElementosUnicos1)
    
    var cont = 0;
    const dadosFinal = []
    var auxiliar = []

    lista1.map((item2) => {

      var grafico = dados.filter(item => item.dataHora == item2)
      
      
      auxiliar.push(grafico[0].preco)
      cont = cont + 1

      if(cont == 4){
        dadosFinal.push(auxiliar)
        auxiliar = []
        cont = 0
      }


    })
    
    datas = Array.from(listaElementosUnicos)
    
    
    useEffect(()=>{
      const option = {
          xAxis: {
            data: datas,
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
          },
          
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: "#262c30"
              },
          },
          
          
          },
          grid: {
              left: '6%',
              right: '2%',
              top: '5%',
          },
          dataZoom: [
            {
              textStyle: {
                color: '#262c30'
              },
              dataBackground: {
                areaStyle: {
                  color: '#fff'
                },
                lineStyle: {
                  opacity: 0.8,
                  color: '#000'
                }
              },
              brushSelect: true
            },
            {
              type: 'inside'
            }
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false,
              type: 'cross',
              lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
              }
            }
          },
          series: [
            {
              type: 'candlestick',
              data: dadosFinal,
              itemStyle: {
                  color: 'green',
                  color0:  'red',
                  borderColor: 'green',
                  borderColor0: 'red'
              }
            },
            

            //Super trend
            
          ]
      };

      

      setOptionChart1(option)
      
      
    }, [dados, dadosFinal])

    return (
      <>
      
          <EChartsReact option={optionChart} key={key} style={{width: '759px', height: '368px'}}/>
      </>
    )
    
}