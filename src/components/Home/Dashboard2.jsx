import React, { useEffect } from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Widget from '../Home/Dashboard/Widget';
import Featured from './Dashboard/featured';
import Chart from './Dashboard/Chart';
import List from './Dashboard/List';

const Dashboard2 = () => {






    return (
        <div className='Dashboard_2'>
            <div className='widgets'>
                <Widget type="students"></Widget>
                <Widget type="projects"></Widget>
                <Widget type="visitors"></Widget>
                {/* <Widget type="students"></Widget> */}


            </div>
            <div className="charts" style={{width:'100%'}}>
                {/* <Featured></Featured> */}
                <Chart title="Project Type"></Chart>

            </div>
            <div className="listContainer">
                <div className="title">Latest Projects</div>
                <List></List>


            </div>
        </div>
    )
}

export default Dashboard2