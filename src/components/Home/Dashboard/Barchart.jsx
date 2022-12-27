import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from './data.js';
import axios from "axios";


export default function BarChart() {

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [UserData, setUserData] = useState([]);

    let batches = [];
    UserData.map((info) => {
        if (!batches.includes(info.Batch)) {
            batches.push(info.Batch);
        }
    });

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property]) return 1;
            else if (a[property] < b[property]) return -1;
            return 0;
        }
    }

    function count_frq(project_type, batch) {
        let cnt = 0;
        UserData.map((info) => {
            if (info.Project_type === project_type && info.Batch === batch) cnt += 1;
        })
        return cnt;
    }

    const data = [];
    batches.map((batch) => { data.push({ 'batch': batch, 'udp': count_frq('UDP', batch), 'idp': count_frq('IDP', batch) }) });
    data.sort(sortByProperty('batch'));

    const chartData = {
        labels: data.map((info) => info.batch),
        datasets: [
            {
                label: 'UDP',
                data: data.map((info) => info.udp),
                backgroundColor: '#0d6efd'
            },
            {
                label: 'IDP',
                data: data.map((info) => info.idp),
                backgroundColor: '#20c997'
            }
        ]
    }

    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {
        // getMyPostData();
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            // console.log(responses)
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setUserData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);
    return (
        <div>
            <Bar data={chartData} options={{ aspectRatio: 4, maintainAspectRatio: true }} />
        </div>
    )
}