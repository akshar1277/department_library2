import React from 'react'
import Chart from 'react-apexcharts';
import data from './data.json';


const Pie2 = () => {

    const data01 = [
        {
            "Project_area": "AI/Machine Learning/Data Mining",

        },
        {
            "Project_area": "IoT",

        },
        {
            "Project_area": "Website/Online Portal",

        },
        {
            "Project_area": "Natural Language Processing",

        },
        {
            "Project_area": "Mobile Application",

        },
        {
            "Project_area": "PERSON RE-IDENTIFICATION",

        },
        {
            "Project_area": "Image Processing",

        },
        {
            "Project_area": "HealthCare/Medical",

        },
        {
            "Project_area": "Robotics",

        }

    ];

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
    console.log(typeof chartdata);
    // eslint-disable-next-line array-callback-return
    data01.map((data01) => { chartdata.push({ 'Project_area': data01.Project_area, 'value': count_fre(data01.Project_area) }) })

    return (
        <>
            {/* <div>Pie2</div> */}

            <Chart type='pie' className="pie" series={chartdata.map((data) => data.value)}
                options={{
                    labels: chartdata.map((data) => data.Project_area),
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }}
            >
            </Chart>
        </>
    )
}

export default Pie2