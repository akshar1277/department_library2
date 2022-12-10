import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import data from './data.json';

const featured = () => {
    return (
        <div className='featured'>

            <div className="top">
                <h1 className="title_1">Total Success Projects</h1>
                <MoreVertIcon fontSize='small'></MoreVertIcon>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={80} text={"80%"} className="CircularProgressbar"></CircularProgressbar>
                </div>
                <p className='title_2'>Total Projects made this Month</p>
                <p className='amount'>12</p>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, animi? Lorem ipsum dolor sit</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">5</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">

                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">8</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featured