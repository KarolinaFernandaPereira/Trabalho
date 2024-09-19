import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import "./Historico.css";
import { Accordion, AccordionTab } from 'primereact/accordion';

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

export const HistoricoPrecosConvencional = () => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Histórico de Preços - Fonte Convencional"
            },
            legend:{
                position: "top",
            }
        },
    }

    const data = {
        labels: [
            "2023-01-02",
            "2023-01-06",
            "2023-01-12",
            "2023-01-18",
            "2023-01-24",
            "2023-01-30",
            "2023-02-02",
            "2023-02-06",
            "2023-02-12",
            "2023-02-18",
            "2023-02-24",
            "2023-02-30",
            "2023-03-02",
            "2023-03-06",
            "2023-03-12",
            "2023-03-18",
            "2023-03-24",
            "2023-03-30",
            "2023-04-02",
            "2023-04-06",
            "2023-04-12",
            "2023-04-18",
            "2023-04-24",
            "2023-04-30",
            "2023-05-02",
            "2023-05-06",
            "2023-05-12",
            "2023-05-18",
            "2023-05-24",
            "2023-05-30",
            "2023-06-02",
            "2023-06-06",
            "2023-06-12",
            "2023-06-18",
            "2023-06-24",
            "2023-06-30",
            "2023-07-02",
            "2023-07-06",
            "2023-07-12",
            "2023-07-18",
            "2023-07-24",
            "2023-07-30",
        ],
        datasets: [
            {
                label: "2023",
                data: [70, 71, 70, 73, 70, 72, 75, 80, 60, 70, 71, 70, 73, 70, 72, 75, 80, 60, 67, 69, 68, 70, 71, 70, 73, 70, 72, 75, 80, 60, 67, 69, 68, 99, 89, 88, 87, 90, 93, 91],
                backgroundColor: "red",
                borderColor: "red",
                pointStyle: false,
            },
            {
                label: "2024",
                data: [108, 100, 95, 98, 99, 89, 88, 87, 90, 93, 91, 95, 98, 99, 89, 88, 87, 90, 93, 91, 69, 68, 70, 71, 72, 73, 70, 72, 78, 81, 88, 89, 89, 88, 87, 90, 93, 91],
                backgroundColor: "yellow",
                borderColor: "yellow",
                pointStyle: false,
            },
            {
                label: "2025",
                data: [125, 115, 110, 113, 116, 118, 111, 102, 103, 104, 108, 100, 100, 99, 98, 98, 93, 94, 95, 104, 100,108, 101, 102, 103, 104, 101, 101,105, 100, 103, 106, 108, 101, 102, 110, 118, 118, 117, 119],
                backgroundColor: "purple",
                borderColor: "purple",
                pointStyle: false,
            },
            {
                label: "2026",
                data: [NaN, NaN, NaN, NaN, NaN, NaN, 122, 110, 112, 113, 114, 118, 120, 110, 109, 108, 103, 104, 105, 114, 110,118, 111, 112, 113, 114, 110, 119,115, 110, 113, 116, 118, 111, 112, 120, 128, 128, 127, 129],
                backgroundColor: "blue",
                borderColor: "blue",
                pointStyle: false,
            },
        ]
    }

    const [desliza, setDesliza] = useState([]);

    return(
        <>
        <div className="container">
            <Accordion activeIndex={0} className="cardGrafico3">
                <AccordionTab
                    header={
                        <>
                            <span> Histórico de Preços </span>
                        </>
                    }>
                    <div className="cardGrafico3" draggable>
                        <Line options={options} data={data}/>
                    </div>
                </AccordionTab>
            </Accordion>
            
        </div>
        </>
    );
}