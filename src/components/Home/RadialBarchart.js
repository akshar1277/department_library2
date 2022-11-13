import React from "react";
import { RadialBar, RadialBarChart } from "recharts";

function RadialBarchart({ chartData }) {
    return <RadialBar data={chartData} />;
}

export default RadialBarchart;