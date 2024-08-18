import React from "react";
import { Line } from 'react-chartjs-2';
import "./swap.css"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    Legend,
    SubTitle,
    Title,
    plugins,
    scales,
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    Legend,
    SubTitle,
    Title,
);

export const Swap1 = () => {
   
    const options = {
        plugins: {
            title: {
                display: true,
                text: "Swap - SE CON ANU JAN/25 DEZ/25 | SE CON ANU JAN/24 DEZ/24",
            },
            legend:{
                position: "bottom",
            }
        },
        scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        }
    }

    const data = {
        labels: [
            "MAR 2023",
            "ABR 2023",
            "MAY 2023",
            "JUN 2023",
            "JUL 2023",
            "AGO 2023",
            "SEP 2023",
            "OUT 2023",
            "NOV 2023",
            "DEZ 2023"
        ],
        datasets: [
            {
                label: "SE CON ANU JAN/24 DEZ/24",
                data: [124, 100, 105, 85, 69, 71, 80, 64, 96, 115],
                backgroundColor: "green",
                borderColor: "green",
                pointStyle: false,
            },
            {
                label: "SE CON ANU JAN/25 DEZ/25",
                data: [122, 92, 85, 79, 99, 112, 70, 66, 77, 100],
                backgroundColor: "red",
                borderColor: "red",
                pointStyle: false,
            }
        ]
    }

    const options2 = {
        plugins: {
            title: {
                display: false,
            },
            legend:{
                position: "top",
            }
        },
        scales: {
            x: {
                    display: true,
            }
        }
    }

    const data2 = {
        labels: [
            "MAR 2023",
            "ABR 2023",
            "MAY 2023",
            "JUN 2023",
            "JUL 2023",
            "AGO 2023",
            "SEP 2023",
            "OUT 2023",
            "NOV 2023",
            "DEZ 2023"
        ],
        datasets: [
            {
                label: "Swap",
                data: [17, 10, 6, 20, 11, 18, 46, 40, 38, 17],
                borderColor: "white",
                backgroundColor: "white",
                pointStyle: false,
            },
            {
                label: "MM15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 4, 15, 18, 30],
                borderColor: "yellow",
                backgroundColor: "yellow",
                pointStyle: false,
            },
            {
                label: "BBL15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 23, 30, 45, 47],
                borderColor: "grey",
                backgroundColor: "grey",
                pointStyle: false,
            },
            {
                label: "BBU15",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 12, 5, 7, 6],
                borderColor: "grey",
                backgroundColor: "grey",
                pointStyle: false,
            }
        ]
    }

    return (
        <>
            <div className="container">
                
                <div className="cardGrafico2" >
                    <Line options={options} data={data}/>
                    <Line options={options2} data={data2}/>
                </div>

            </div>

        </>
        
    
    );
}