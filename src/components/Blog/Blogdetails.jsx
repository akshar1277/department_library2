import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Details from './Details';

const Blogdetails = () => {


    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");



    let first = "https://department-library.herokuapp.com/Project_2019-20/?format=json"
    let second = "https://department-library.herokuapp.com/Project_2020-21/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);




    useEffect(() => {

        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)


        })).catch((error) => setIsError(error.message));
    }, []);

    return (
        <>
            {myData.map((post) => {
                const { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide } = post;
                return (
                    <Details key={id} Batch={Batch} Project_id={Project_id} Project_name={Project_name} Abstract={Abstract} Leader_email={Leader_email} Leader_enroll={Leader_enroll} Leader_name={Leader_name} Internal_guide={Internal_guide}></Details>
                );
            })}
        </>
    )
}

export default Blogdetails