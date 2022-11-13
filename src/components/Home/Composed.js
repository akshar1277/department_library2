import React from "react";
import { ComposedChart } from "recharts";

function Composed({ chartData }) {
    return <ComposedChart data={chartData} />;
}

export default Composed;