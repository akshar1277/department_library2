import React, { useEffect } from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Widget from '../Home/Dashboard/Widget';
import Featured from './Dashboard/featured';
import Chart from './Dashboard/Chart';
import List from './Dashboard/List';
import Pie1 from './Dashboard/Pie1';
import Pie2 from './Dashboard/Pie2';
import BarChart from './Dashboard/Barchart';


const Dashboard2 = () => {

    return (
        <div className='Dashboard_2 my-5 py-3'>
            <div className='widgets'>
                <Widget type="Projects"></Widget>
                <Widget type="UDP"></Widget>
                <Widget type="IDP"></Widget>
                {/* <Widget type="students"></Widget> */}


            </div>

            <div className="charts">
                <Pie1></Pie1>
                <Pie2></Pie2>

            </div>
            <div className="bar" style={{ width: '97%', margin: "5rem auto" }}>
                <div className="title">Project Type</div>
                <BarChart />
            </div>
            {/* <div className="charts" style={{ width: '100%' }}>
                <BarChart title="Project Type"></BarChart>

            </div> */}

            {/* <div className="listContainer">
                <div className="title">Latest Projects</div>
                <List></List>

            </div> */}
        </div>
    )
}

export default Dashboard2