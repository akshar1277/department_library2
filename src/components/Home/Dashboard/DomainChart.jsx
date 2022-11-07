import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['AI', 'ML', 'Data Mining', 'IoT', 'Natural Language Processing', 'Web Dev', 'Mobile App Dev'],
  datasets: [
    {
      label: '# of Votes',
      data: [23, 34, 45, 24, 13, 23, 20],
      backgroundColor: [
        'rgba(25, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)'
      ]
    },
  ],
};

export function DomainChart() {
  return <Doughnut data={data} />;
}


