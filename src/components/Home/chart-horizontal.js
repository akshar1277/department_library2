import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];


const data = {
    labels,
    datasets: [
        {
            label: "2019-2020",
            data: [5, 9, 8, 8, 6, 4, 9,2,3,4,5,6],
            borderColor: "rgb(255,99, 132)",
            backgoundColor: "rgb(255,99,132,0.9)",
        },
        {
            label: "2020-2021",
            data: [7,4,8,5,3,6,3,2,7,5,6,7],
            borderColor: "rgb(53, 162, 235)",
            backgoundColor: "rgb(53,162,235,0.9)",
        },
    ]
}

const options = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            diaplay: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
}


const ChartHorizontal = () => {
    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}

export default ChartHorizontal;
