import React, { useState } from "react";
import { Bar, Line } from 'react-chartjs-2';
import "./Ranking.css"
import { Accordion, AccordionTab } from 'primereact/accordion';
import "../Indicadores.css"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    SubTitle,
    Title,
    plugins,
    
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    SubTitle,
    Title,
);

export const RankingVolume = () => {

    
  
    

  const [dados, setDados] = useState([]);
  const [teste, setTeste] = useState([]);

/*
useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/karol?format=json')
    .then((response) => {
      setDados(response.data)
      setTeste(response.data.datasets)
    })
    //.catch(error => console.log(error))
    //.then(res => console.log(res))
  }, [])

*/
  
  //dados.datasets.map((d) => {
  //  console.log(d)
  //})
  




var data = {
    labels: ['Walnut Brownie', 'Lemon Juice', 'Orange Juice', 'Tea', 'Matcha Cocoa', 'Cheese Brownie', 'Cheese Cocoa', 'Milk Tea', 'Matcha Latte'],
    datasets: [{
        label: 'Quantidade',
        data: [20000, 100000, 90000, 80000, 25000, 15000, 40000, 85000, 60000],
        
        borderColor: '#333',
        borderWidth: 1
    }]
};

const options = {
    indexAxis: 'y',
    scales: {
        x: {
            min: 0,
            max: 120000,
            ticks: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Quantidade por Item'
        },
        annotation: {
            annotations: {
                box1: {
                    type: 'box',
                    xScaleID: 'x',
                    yScaleID: 'y',
                    xMin: 0,
                    xMax: 20000,
                    yMin: -0.5,
                    yMax: 9.5,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    label: {
                        content: 'Low Score',
                        position: 'left'
                    }
                },
                box2: {
                    type: 'box',
                    xScaleID: 'x',
                    yScaleID: 'y',
                    xMin: 100000,
                    xMax: 120000,
                    yMin: -0.5,
                    yMax: 9.5,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    label: {
                        content: 'High Score',
                        position: 'right'
                    }
                }
            }
        }
    }
};

  

  const options2 = { 
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        display: false
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      title: {
        display: true,
        text: 'Ranking de Volume',
        position: "top"
      },
      subtitle:{
        display: false,
        color: "white",
        text: "Volume (Mwm)",
        position: "bottom"
    },
    }
  };

  const data2 = {
      labels: [
          "SE CON MEN NOV/23",
          "SE CON MEN DEZ/23",
          "SE CON MEN NOV/23 - Spread",
          "SE CON MEN JAN/24",
          "SE I5 MEN NOV/23 - Spread",
      ],
      datasets: [
          {
              
              data: [[5, 10], [10, 15]],
              backgroundColor: "yellow",
          },
          {
            
            data: [[10, 20], [25, 30]],
            backgroundColor: "yellow",
          },
          
      ]
  };

  const lineOptions = {
    plugins: {
      legend: {
        display: false

      }
    }
  }


    return (
        <div className="container" >
           <Accordion activeIndex={0} className="teste1">
              <AccordionTab 
                header={
                  <>
                    <span> Resumo do Dia </span>
                  </>
                }>

                {/* <Indicadores contentIndi={itemsIndicadores} /> */}
                <div className="cardGrafico" draggable>
                    <Bar options={options} data={data2}/>
                </div>
                
                { /* <MultiSelectIndicadores contentIndi={itemsIndicadores2}/> */ }
               
              </AccordionTab>
           </Accordion>

           <Accordion activeIndex={0} className="teste1">

              <AccordionTab header={
                 <>
                    <span>Resumo da Semana</span>
                 </>
              }>

              <div className="cardGrafico" draggable>
                    <Bar options={options2} data={data2}/>
                </div>
               { /*<MultiSelectIndicadores contentIndi={itemsIndicadores}/> */ }
              </AccordionTab>
           
           </Accordion>

           
           
           

        </div>
    
    );
}

// {
//   label: 'Ritmo',
//   icon: 'pi pi-stop'
// },
// {
//   label: 'Volume Diário (Quantidade)',
//   icon: 'pi pi-stop'
// },
// {
//   label: 'Volume Diário (Compra x Venda)',
//   icon: 'pi pi-check-square'
// },
// {
//   label: 'Mercado x Rodada',
//   icon: 'pi pi-stop'
// },
// {
//   label: 'Resumo do Dia e da Semana',
//   icon: 'pi pi-stop'
// },



/*


*/