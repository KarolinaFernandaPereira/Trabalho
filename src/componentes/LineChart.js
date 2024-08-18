import {Line} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const GraficoLinha = () => {

    const options = {};

    const data = {
        labels: [
            "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo",
        ],
        datasets: [
            {
                label: "Karol linda",
                data: [250, 250, 250, 250],
                borderColor: "rgb(75, 192, 192)"
            }
        ]
    };

    return <Line options={options} data={data}/>
}