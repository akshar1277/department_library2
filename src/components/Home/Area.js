import React from "react";
import { AreaChart} from "recharts";

function Area({ chartData }) {
    return <AreaChart data={chartData} />;
}

export default Area;