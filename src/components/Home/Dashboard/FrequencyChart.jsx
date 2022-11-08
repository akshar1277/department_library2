import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Projects per year',
      data: [23, 25, 10, 20, 30, 35],
      backgroundColor: '#5875f5'
    }
  ],
};

export default function FrequencyChart(){
  return <Bar options={options} data={data} />;
}

      
    