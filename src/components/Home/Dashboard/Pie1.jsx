import React from 'react'
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
import data from './data.json';
const Pie1 = () => {

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

    const count_fre = (Language) => {
        let count = 0;
        data.map((datas) => {
            // console.log(datas.Langauge.split(","));
            // console.log(datas.Langauge.includes('Python'));

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
    console.log(typeof chartdata);
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
            <Chart type='pie' className="pie" series={chartdata.map((data) => data.value) }
                options={{
                    labels: chartdata.map((data) => data.Langauge),
                   
                }}
            ></Chart>


        </>
    )
}

export default Pie1