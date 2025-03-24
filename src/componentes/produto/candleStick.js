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
      let option = {
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
          


          }
          
        ]
      };

      option.series.filter(serie => 
        indicador.some(item => 
            (item.code === 'SAR' && serie.name === 'SAR') ||
            (item.code === 'MEDIA' && (serie.name === 'Máximas' || serie.name === 'Mínimas')) ||
            (item.code === 'BOLLINGER' && serie.name === 'Preço de Fechamento') ||
            (item.code === 'SUPER' && serie.name === 'SuperTrendVermelho')
        )
      );

      setOptionChart1(option)
      setKey((prev) => prev + 2);
      if(indicador !== undefined){
        
        for(const item of indicador) {
          if(item.code === 'SAR'){
            option.series.push({
              name: "SAR",
              type: 'line',
              color: "#00ff95",
              symbol: "diamond",
              lineStyle: {
                width: 0,
              },
              smooth: true,
              symbolSize: 4,
              data: [100, 114, 90, 87, 102],
            });
            setKey((prev) => prev + 1);

            indicadores1.push("SAR");
            setIndicadores1(indicadores1)
          } 

          if(item.code === 'MEDIA') {
            option.series.push({
              data: [99, 104, 78, 120, 90],
              type: 'line',
              color: "blue",
              name: "Máximas",
              symbol: "circle",
              lineStyle: {
                  type: 'dashed'
                  },
              },
              {
                data: [97, 102, 76, 118, 86],
                type: 'line',
                color: "red",
                name: "Mínimas",
                symbol: "circle",
                lineStyle: {
                    type: 'dashed'
                  },
              },
              {
                  data: [100, 105, 87, 110, 95],
                  type: 'line',
                  color: "green",
                  name: "Média Móvel Máximas (20 períodos)",
                  symbol: "circle",
              },
              {
                data: [103, 108, 90, 113, 100],
                type: 'line',
                color: "yellow",
                name: "Média Móvel Mínima (20 períodos)",
                symbol: "circle",
            })

            setKey((prev) => prev + 1);

            indicadores1.push('MEDIA')
            setIndicadores1(indicadores1)
          }
          
          //Bolliger
          if(item.code === 'BOLLINGER') {
            option.series.push( {
              name: 'Preço de Fechamento',
              type: 'line',
              color: 'blue',
              
              data: [82, 72, 75, 68, 20],
              symbol: 'none',
              
            },
            
            {
              name: 'Média Móvel Simples (SMA)',
              type: 'line',
              color: 'yellow',
              data: [50, 88, 95, 40, 45],
              symbol: 'none',
              
            },
            // Área sombreada entre as bandas
            {
              //Linha de baixo
              name: 'Banda Inferior',
              type: 'line',
              data: [15, 25, 20, 15, 16],
              areaStyle: {
                opacity: 0,
                color: 'red'
              },
              lineStyle: {
                type: 'dashed',
              },
              symbol: 'none',
              stack: 'confidence-band',
            },
            {
              //Linha de cima
              name: 'Banda Superior',
              type: 'line',
              color: 'green',
              data: [195, 190, 195, 190, 195, 198],
              areaStyle: {
                opacity: 0.2,
                color: '#73c0de'
              },
              lineStyle: {
                type: 'dashed',
              },
              symbol: 'none',
              stack: 'confidence-band',
            })

            setKey((prev) => prev + 1);

            indicadores1.push('BOLLINGER')
            setIndicadores1(indicadores1)
          }

          //Supertrend
          if(item.code === 'SUPER') {
            option.series.push({
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              
              
              stack: "Total",
              color: "red",
              symbolSize: 6,
              lineStyle: {
                  width: 0,
              },
              showSymbol: false,
              emphasis: {
                  focus: 'series'
              },
              data: [71.23, 89.57, 87.58, 83.3, '-'],
              inverse: true,
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              color: "red",
              
              areaStyle: {
                  opacity: 0.2,
              },
              stack: "Total",
              showSymbol: false,
              
              emphasis: {
                  focus: 'series'
              },
              data: [90, 90, 100, 100, '-'],
              
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              
              
  
              stack: "total",
              
              color: "green",
              symbolSize: 6,
  
              showSymbol: false,
              
              
              emphasis: {
                  focus: 'series'
              },
              data: ['-', '-', '-', '-', 25],
              inverse: true,
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              color: "green",
              stack: "total", 
              areaStyle: {
                  opacity: 0.2,
              },
              
              lineStyle: {
                  width: 0,
              },
              showSymbol: false,
              
              emphasis: {
                  focus: 'series'
              },
              data: ['-', '-', '-', '-', 140],
              
            })

            setKey((prev) => prev + 1);

            indicadores1.push('SUPER')
            setIndicadores1(indicadores1)
          }

          if(item.code === "MFI") { 
            option.series.push({
              data: [99, 104, 78, 120, 90],
              type: 'line',
              color: "orange",
              name: "Máximas",
              symbol: "circle",
              lineStyle: {
                  type: 'dashed'
                  },
              })

            setKey((prev) => prev + 1);

            indicadores1.push('MFI')
            setIndicadores1(indicadores1)
          }
          
        }
      }

      

     
      setOptionChart1(option)

      

      
    
    }, [indicador, dados])

    
    
   
   
    return (
      <>
      
          <EChartsReact option={optionChart} key={key} />
      
      </>

    )
    
}
