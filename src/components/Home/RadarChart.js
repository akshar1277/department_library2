import React from "react";
import { Radar } from "react-chartjs-2";


function RadarChart({ chartData }) {
    return <Radar data={chartData} />;
}

export default RadarChart;