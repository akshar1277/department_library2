import React, { useState, useEffect } from 'react'
// import { Chart } from 'chart.js'
// import { PieChart } from 'recharts'
// import { Pie } from 'recharts'
// import { Tooltip } from 'recharts'
// import { useState } from "react";

// import { Pie } from 'react-chartjs-2'
// import { ArcElement, Tooltip, Legend } from 'chart.js'

// // eslint-disable-next-line no-undef
// ChartJs.register(
//     ArcElement, Tooltip, Legend
// );
import Chart from 'react-apexcharts';
// import data from './data.json';
import axios from "axios";
import { Link } from 'react-router-dom';
const Pie1 = () => {

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);

    const data01 = [
        {
            "languages": "Python",

        },
        {
            "languages": "JavaScript",

        },
        {
            "languages": "HTML",

        },
        {
            "languages": "PHP",

        },
        {
            "languages": "Android",

        },
        {
            "languages": "Flutter",

        },
        {
            "languages": "JAVA",

        },
        {
            "languages": "C/C++",

        },
        {
            "languages": "IOS",

        },
        {
            "languages": ".NET",

        },
        {
            "languages": "Node JS",

        },
        {
            "languages": "Flutter",

        }

    ];

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
            setData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);

    const count_fre = (Language) => {
        let count = 0;
        data.map((datas) => {


            if (datas.Langauge.includes(Language)) {

                count += 1;
            }
        })
        return count

    }


    // console.log(count_fre("Python"));
    // console.log(count_fre("JAVA"));
    // console.log(count_fre("Android"));
    // console.log(count_fre("Node JS"));
    // console.log(count_fre("Flutter"));
    // console.log(count_fre(".NET"));
    // console.log(count_fre("C/C++"));
    // console.log(count_fre("PHP"));
    // console.log(count_fre("IOS"));
    // console.log(count_fre("JavaScript"));
    // console.log(count_fre("HTML"));


    const chartdata = []
    // console.log(typeof chartdata);
    // eslint-disable-next-line array-callback-return
    data01.map((data01) => { chartdata.push({ 'Langauge': data01.languages, 'value': count_fre(data01.languages) }) })


    // const chartdata2 = ({
    //     labels: chartdata.map((data) => data.Langauge),
    //     datasets: [
    //         {
    //             label: "Projects in value",
    //             data: chartdata.map((data) => data.value),
    //             backgroundColor: [
    //                 "rgba(75,192,192,1)",
    //                 "#ecf0f1",
    //                 "#50AF95",
    //                 "#f3ba2f",
    //                 "#2a71d0",
    //                 "#ff8080",
    //                 "#ff1aff",
    //                 "#1affa3",
    //                 "#0099ff",
    //                 "#00ff00",
    //                 "#ffd11a"
    //             ],
    //             borderColor: "black",
    //             borderWidth: 2,
    //         },
    //     ],
    // });
    // console.log(chartdata2);

    // const options = {
    //     plugin: {
    //         legend: {
    //             display: true,
    //             position: "bottom"
    //         },
    //         title: {
    //             text: "Pie Chart for Projects",
    //             display: true,
    //             fontSize: 25
    //         }
    //     }
    // }






    return (
        <>
            {/* <div>Pie1</div> */}
            {/* <PieChart width={730} height={250} classlanguages="border-2">
                <Pie data={chartdata} dataKey="value" nameKey="Langauge" cx="50%" cy="50%" outerRadius={100} fill="#ffd11a" label />



                <Tooltip></Tooltip>
            </PieChart> */}
            {/* <div style={{ width: 500 }}>
                <Pie data={chartdata2} options={options} />
            </div> */}
            {isError !== "" && <h2>{isError}</h2>}

            <Chart type='pie' className="pie" series={chartdata.map((data) => data.value)}
                options={{
                    labels: chartdata.map((data) => data.Langauge),
                    events: {
                        dataPointSelection: (event, chartContext, config) => {
                            console.log(chartContext, config, event);
                        }
                    }

                }}
            ></Chart>



        </>
    )
}

export default Pie1