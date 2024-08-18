import React from "react";
import { Bar, Line } from 'react-chartjs-2';
import "./Ranking.css"
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
        labels: [
            "SE CON MEN NOV/23",
            "SE CON MEN DEZ/23",
            "SE CON MEN NOV/23 - Spread",
            "SE CON MEN JAN/24",
            "SE I5 MEN NOV/23 - Spread",
        ],
        datasets: [
            {
                label: "Ag. Venda",
                data: [130, 13, 0, 0, 10],
                backgroundColor: "red",
            },
            {
                label: "Ag. Compra",
                data: [5, 4, 15, 12, 2],
                backgroundColor: "green",
            }
        ]
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

    const lineData = {

    }

    
    
    return (
        <div className="container" >
            <div className="cardGrafico" >
                <Bar options={options} data={data}/>
            </div>
            <div className="cardGrafico">
                <Bar options={options2} data={data2}/>
                
            </div>

        </div>
    
    );
}

//<Line options={lineOptions} data={data}/>