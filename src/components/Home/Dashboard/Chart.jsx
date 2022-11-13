import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, YAxis
} from "recharts";

// const data = [
//     { name: "January", Total: 21 },
//     { name: "February", Total: 12 },
//     { name: "March", Total: 8 },
//     { name: "April", Total: 16 },
//     { name: "May", Total: 9 },
//     { name: "June", Total: 17 },
//     { name: "July", Total: 23 },
//     { name: "Augest", Total: 15 },
//     { name: "September", Total: 11 },
//     { name: "October", Total: 13 },
//     { name: "November", Total: 12 },
//     { name: "December", Total: 16 },
// ];


const data = [
    {
        name: 'January',
        2019: 12,
        2020: 24,
        amt: 24,
    },
    {
        name: 'February',
        2019: 30,
        2020: 13,
        amt: 22,
    },
    {
        name: 'March',
        2019: 45,
        2020: 23,
    },
    {
        name: 'April',
        2019: 27,
        2020: 40,
        amt: 20,
    },
    {
        name: 'May',
        2019: 18,
        2020: 48,
        amt: 21,
    },
    {
        name: 'June',
        2019: 23,
        2020: 28,
        amt: 25,
    },
    {
        name: 'July',
        2019: 34,
        2020: 18,
        amt: 21,
    },
    {
        name: 'Augest',
        2019: 14,
        2020: 25,
        amt: 21,
    },
    {
        name: 'September',
        2019: 19,
        2020: 23,
        amt: 21,
    },
    {
        name: 'October',
        2019: 24,
        2020: 15,
        amt: 21,
    },
    {
        name: 'November',
        2019: 10,
        2020: 35,
        amt: 21,
    },
    {
        name: 'December',
        2019: 32,
        2020: 17,
        amt: 21,
    }
];

const Chart = ({title}) => {
    return (
        <div className="chart">
        <div className="title">{title}</div>
            {/* <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0909FF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#0909FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#0909FF"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer> */}

            <AreaChart width={900} height={400} data={data}
                margin={{ top: 10, right: 50, left: 0, bottom: 10}}>
                <defs>
                    <linearGradient id="color2019" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0909FF" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#0909FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="color2020" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00E746" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#00E746" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="2019" stroke="#0909FF" fillOpacity={1} fill="url(#color2019)" />
                <Area type="monotone" dataKey="2020" stroke="#00E746" fillOpacity={1} fill="url(#color2020)" />
            </AreaChart>
        </div>

    )
}

export default Chart