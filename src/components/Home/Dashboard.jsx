import React from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { UserData } from "./Data";
import { useState } from 'react';
import ScatterChart from './ScatterChart';
import RadialBarchart from './RadialBarchart';
import RadarChart from './RadarChart';
import Composed from './Composed';
import Area from './Area';
import { AreaChart } from 'recharts';

import ChartHorizontal from './chart-horizontal';



const pdata = [
    {
        name: 'Python',
        student: 13,
        projects: 10
    },
    {
        name: 'Javascript',
        student: 15,
        projects: 12
    },
    {
        name: 'PHP',
        student: 5,
        projects: 10
    },
    {
        name: 'Java',
        student: 10,
        projects: 5
    },
    {
        name: 'C#',
        student: 9,
        projects: 4
    },
    {
        name: 'C++',
        student: 10,
        projects: 8
    },
];



const Dashboard = () => {


    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#00FFFF",
                    "#EE4E34",
                    "#99F443",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
        // <div classNameName='p-5 '>

        //     <div classNameName="dash-content">
        //         <div classNameName="overview">
        //             <div classNameName="title">
        //                 <i classNameName="uil uil-tachometer-fast-alt"></i>
        //                 <span classNameName="text">Dashboard</span>
        //             </div>

        //             <div classNameName="boxes">
        //                 <div classNameName="box box1">
        //                     <i classNameName="uil uil-thumbs-up"></i>
        //                     <span classNameName="text">Total Likes</span>
        //                     <span classNameName="number">50,120</span>
        //                 </div>
        //                 <div classNameName="box box2">
        //                     <i classNameName="uil uil-comments"></i>
        //                     <span classNameName="text">Comments</span>
        //                     <span classNameName="number">20,120</span>
        //                 </div>
        //                 <div classNameName="box box3">
        //                     <i classNameName="uil uil-share"></i>
        //                     <span classNameName="text">Total Share</span>
        //                     <span classNameName="number">10,120</span>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>



        // </div>
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <div className="container w-full mx-auto pt-20">

                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">



                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-green-600"><i
                                            className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">Total Revenue</h5>
                                        <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i
                                            className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-pink-600"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">Total Users</h5>
                                        <h3 className="font-bold text-3xl">249 <span className="text-pink-500"><i
                                            className="fas fa-exchange-alt"></i></span></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-yellow-600"><i
                                            className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">New Users</h5>
                                        <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i
                                            className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-blue-600"><i
                                            className="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">Server Uptime</h5>
                                        <h3 className="font-bold text-3xl">152 days</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-indigo-600"><i
                                            className="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">To Do List</h5>
                                        <h3 className="font-bold text-3xl">7 tasks</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                            <div className="bg-white border rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded p-3 bg-red-600"><i className="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-500">Issues</h5>
                                        <h3 className="font-bold text-3xl">3 <span className="text-red-500"><i
                                            className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <hr className="border-b-2 border-gray-400 my-8 mx-4" />

                    <div className="flex flex-row flex-wrap flex-grow mt-2">

                        <div className="w-full  p-3">

                            <div className="bg-white border rounded shadow">
                                <div className="border-b p-3">
                                    <h5 className="font-bold uppercase text-gray-600">Bar Chart</h5>
                                </div>
                                <div className="p-3 pb-2" >




                                    {/* <div style={{ width: 600 }}>
                                        <BarChart chartData={userData} />
                                    </div> */}
                                    <ChartHorizontal></ChartHorizontal>




                                </div>
                            </div>

                        </div>

                        <div className="w-full md:w-1/2 p-3 ">

                            <div className="bg-white border rounded shadow">
                                <div className="border-b p-3">
                                    <h5 className="font-bold uppercase text-gray-600">Line Chart</h5>
                                </div>
                                <div className="p-3 mb-5 pb-4 ">

                                    <div style={{ width: 500 }}>
                                        <LineChart chartData={userData} />
                                    </div>





                                </div>
                            </div>

                        </div>

                        <div className="w-full md:w-1/2  p-3">

                            <div className="bg-white border rounded shadow">
                                <div className="border-b p-3">
                                    <h5 className="font-bold uppercase text-gray-600">Pie Chart</h5>
                                </div>
                                <div className="p-5">
                                    <div style={{ width: 500 }}>
                                        <PieChart chartData={userData} />
                                    </div>





                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/2  p-3">

                            <div className="bg-white border rounded shadow">
                                <div className="border-b p-3">
                                    <h5 className="font-bold uppercase text-gray-600">Radar Chart</h5>
                                </div>
                                <div className="p-5">

                                    <div style={{ width: 500 }}>
                                        <RadarChart chartData={userData} />
                                    </div>



                                </div>
                            </div>

                        </div>





                    </div>


                </div>


            </div>
        </div>
    )
}

export default Dashboard