import React, { useState, useEffect } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import axios from "axios";
// import { UserData } from './data.js'


const Widget = ({ type }) => {
    const [UserData, setUserData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");


    let data;
    const amount = 130
    const diff = 100

    function count_projects(project_type) {
        let cnt = 0;
        UserData.map((info) => { if (info.Project_type === project_type) cnt += 1; });
        return cnt;
    }
    let UDP_projects = count_projects("UDP"), IDP_projects = count_projects('IDP');


    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {
        // getMyPostData();
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            // console.log(responses)
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setUserData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);

    switch (type) {
        case "Projects":
            data = {
                title: "Projects",
                isMoney: false,
                link: "see all Students",
                icon: (<PersonOutlineIcon className='icon' style={
                    {
                        color: "#ff8a65",
                        backgroundColor: "#ff8a6570",
                    }
                }></PersonOutlineIcon>),
                amount: IDP_projects + UDP_projects

            };
            break;
        case "IDP":
            data = {
                title: "IDP",
                isMoney: false,
                link: "See all IDP Projects",
                icon: (<MonetizationOnIcon className='icon' style={{
                    color: "#69f0ae",
                    backgroundColor: "#69f0ae70",
                }}></MonetizationOnIcon>),
                amount: IDP_projects
            };
            break;
        case "UDP":
            data = {
                title: "UDP",
                isMoney: false,
                link: "see all UDP Visitors",
                icon: (<AccountCircleIcon className='icon' style={{
                    color: "#00b0ff",
                    backgroundColor: "#00b0ff70",
                }}></AccountCircleIcon>),
                amount: UDP_projects
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