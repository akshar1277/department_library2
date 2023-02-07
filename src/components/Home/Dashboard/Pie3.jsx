import { useRef } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js'
import { ArcElement } from 'chart.js'
import { Tooltip } from 'chart.js'
import { Legend } from 'chart.js'
import { Pie, getElementsAtEvent } from 'react-chartjs-2'
import axios from "axios";


const Pie3 = () => {

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);

    const data01 = [
        {
            "Project_area": "AI/Machine Learning/Data Mining",
            "color": "#0d6efd",
            "link": "https://www.npmjs.com/package/react-tilt"

        },
        {
            "Project_area": "IoT",
            "color": "#ffc107",
            "link": "https://codingstatus.com/how-to-display-images-in-react-js/"

        },
        {
            "Project_area": "Website/Online Portal",
            "color": "#6610f2",
            "link": "https://www.codewithharry.com/blogpost/php-cheatsheet/"

        },
        {
            "Project_area": "Natural Language Processing",
            "color": "#20c997",
            "link": "https://chakra-ui.com/"

        },
        {
            "Project_area": "Mobile Application",
            "color": "#0dcaf0",
            "link": "https://chakra-ui.com/"

        },
        {
            "Project_area": "PERSON RE-IDENTIFICATION",
            "color": "#0dcaf0",
            "link": "https://chakra-ui.com/"

        },
        {
            "Project_area": "Image Processing",
            "color": "#dc3545",
            "link": "https://chakra-ui.com/"

        },
        {
            "Project_area": "HealthCare/Medical",
            "color": "#d63384",
            "link": "https://chakra-ui.com/"

        },
        {
            "Project_area": "Robotics",
            "color": "#6f42c1",
            "link": "https://chakra-ui.com/"

        }

    ];

    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {

        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {

            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);


    const count_fre = (Area) => {
        let count = 0;
        data.map((datas) => {


            if (datas.Project_area.includes(Area)) {

                count += 1;
            }
        })
        return count

    }

    const chartdata = []
    // console.log(typeof chartdata);
    // eslint-disable-next-line array-callback-return
    data01.map((data01) => { chartdata.push({ 'Project_area': data01.Project_area, 'value': count_fre(data01.Project_area), 'color': data01.color, 'link': data01.link }) })

    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend
    )

    const dataChart = {
        labels: chartdata.map((data) => data.Project_area),
        datasets: [
            {
                labels: chartdata.map((data) => data.value),
                data: chartdata.map((data) => data.value),
                borderColor: '#fff',
                backgroundColor: chartdata.map((data) => data.color),
                link: chartdata.map((data) => data.link)

            }
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PieChart for Project Area'
            },
            datalabels: {
                display: true,
                align: 'bottom',
                backgroundColor: '#ccc',
                borderRadius: 3,
                font: {
                    size: 18,
                },
            },

        },
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function (tooltipItem, data) {
                    return data['datasets'][0]['data'][tooltipItem['index']];
                },
                afterLabel: function (tooltipItem, data) {
                    var dataset = data['datasets'][0];
                    var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                    return '(' + percent + '%)';
                }
            },
            backgroundColor: '#FFF',
            titleFontSize: 16,
            titleFontColor: '#0066ff',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false
        }

    }

    const chartRef = useRef();
    const onClick = (event) => {

        if (getElementsAtEvent(chartRef.current, event).length > 0) {  //means exist then length = 1


            const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex;
            const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
            console.log(`DataSet: ${datasetIndexNum},& Data:${dataPoint}`);
            console.log(dataChart.datasets[datasetIndexNum].link[dataPoint]);
            console.log(dataChart);

            const Link = dataChart.datasets[datasetIndexNum].link[dataPoint]
            window.open(Link, '_parent')

        }


    }
    return (
        <>

            <div className="pie">
                <Pie data={dataChart} options={options} onClick={onClick} ref={chartRef}></Pie>
            </div>
        </>
    )
}

export default Pie3