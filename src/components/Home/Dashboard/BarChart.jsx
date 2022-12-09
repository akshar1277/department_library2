import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto';
import {UserData} from './data.js';
let batches = [];
UserData.map((info) => {
    if(!batches.includes(info.Batch)){
        batches.push(info.Batch);
    }
});

function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  return 1;  
       else if(a[property] < b[property])  return -1;  
       return 0;  
    }  
}

function count_frq(project_type, batch){
    let cnt = 0;
    UserData.map((info) => {
        if(info.Project_type === project_type && info.Batch === batch) cnt += 1; 
    })
    return cnt;
}

const data = [];
batches.map((batch) => {data.push({'batch' : batch, 'udp' : count_frq('UDP', batch), 'idp' : count_frq('IDP', batch)})});
data.sort(sortByProperty('batch'));

const chartData = {
    labels: data.map((info) => info.batch),
    datasets : [
        {
            label: 'UDP',
            data : data.map((info) => info.udp),
            backgroundColor : '#6389eb'
        },
        {
            label: 'IDP',
            data : data.map((info) => info.idp)
        }
    ]
}

export default function BarChart() {
  return (
    <div>
        <Bar data={chartData} options = {{aspectRatio: 4,maintainAspectRatio : true}}/>
    </div>
  )
}
