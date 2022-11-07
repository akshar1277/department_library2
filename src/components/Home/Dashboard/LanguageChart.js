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

const labels = ['React', 'Angular', 'Kotlin', 'Python', 'Javascript', 'Java', 'Cpp', 'Node js'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Technology',
      data: [14, 32, 20, 58, 65, 47, 23, 40],
      backgroundColor: '#6082e6',
    }
  ],
};

export default function LanguageChart() {
  return <Bar options={options} data={data} />;
}
