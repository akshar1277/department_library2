import React from 'react'
import BarChart from './BarChart';

const Chart = ({title}) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <BarChart/>
        </div>

    )
}

export default Chart