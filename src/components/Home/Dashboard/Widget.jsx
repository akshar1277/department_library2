import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Widget = ({ type }) => {

    let data;
    const amount = 130
    const diff = 100

    switch (type) {
        case "students":
            data = {
                title: "Students",
                isMoney: false,
                link: "see all Students",
                icon: (<PersonOutlineIcon className='icon' style={
                    {
                        color: "#ff8a65",
                        backgroundColor: "#ff8a6570",
                    }
                }></PersonOutlineIcon>),
                amount: 90

            };
            break;
        case "projects":
            data = {
                title: "Projects",
                isMoney: false,
                link: "See all Projects",
                icon: (<MonetizationOnIcon className='icon' style={{
                    color: "#69f0ae",
                    backgroundColor: "#69f0ae70",
                }}></MonetizationOnIcon>),
                amount: 100
            };
            break;
        case "visitors":
            data = {
                title: "Visitors",
                isMoney: false,
                link: "see all Visitors",
                icon: (<AccountCircleIcon className='icon' style={{
                    color: "#00b0ff",
                    backgroundColor: "#00b0ff70",
                }}></AccountCircleIcon>),
                amount: 500
            };
            break;
        default:
            break;

    }
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.amount}</span>
                <span className='link'>{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon />
                    {diff}%</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget