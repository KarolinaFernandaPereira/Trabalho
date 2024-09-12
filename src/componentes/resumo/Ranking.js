import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bar, Line } from 'react-chartjs-2';
import "./Ranking.css"
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';


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

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/karol?format=json')
      .then((response) => {
        setDados(response.data)
        setTeste(response.data.datasets)
      })
      //.catch(error => console.log(error))
      //.then(res => console.log(res))
    }, [])
    
    //dados.datasets.map((d) => {
    //  console.log(d)
    //})

    const options = { 
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
            display: true,
            color: "white",
            text: "Volume (Mwm)",
            position: "bottom"
        },
        }
      };

    const data = {
        labels: dados.labels,
        datasets: teste
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

    const itemsIndicadores = [
      {
        label: 'Ritmo',
        icon: 'pi pi-star'
      },
      {
        label: 'Volume Diário (Quantidade)',
        icon: 'pi pi-star'
      },
      {
        label: 'Volume Diário (Compra x Venda)',
        icon: 'pi pi-star'
      },
      {
        label: 'Mercado x Rodada',
        icon: 'pi pi-star'
      },
      {
        label: 'Resumo do Dia e da Semana',
        icon: 'pi pi-star'
      },   
    ];

  const menuLeft = useRef(null);
  const toast = useRef(null);
    
    return (
        <div className="container" >
           <Accordion activeIndex={0} className="teste1">
              <AccordionTab 
                header={
                  <>
                    <span> Ranking de Volume </span>
                  </>
                }>

                <div>
                  <Toast ref={toast}></Toast>
                  <Menu model={itemsIndicadores} popup ref={menuLeft} id="popup_menu_left" />
                  <Button label="Indicadores" className="Indicadores" icon="pi pi-calculator"
                    onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup/>
                </div>
                
                <div className="cardGrafico" draggable>
                    <Bar options={options} data={data}/>
                </div>
               
              </AccordionTab>
           </Accordion>
           <Accordion activeIndex={0} className="teste1">

              <AccordionTab header="Ranking de Volume">

                <div className="cardGrafico">
                    <Bar options={options2} data={data2}/>
                    
                </div>
              </AccordionTab>
           </Accordion>

        </div>
    
    );
}







//<Line options={lineOptions} data={data}/>