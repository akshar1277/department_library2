import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {


    const rows = [
        {
            "id": 1,
            "Batch": "2020-2021",
            "Project_id": "2020-2021-01",
            "Project_type": "Null",
            "Project_name": "Intkut - Deepfake Detection",
            "Abstract": "Null",
            "Project_area": "Computer Vision",
            "Langauge": "Null",
            "Company_name": "Null",
            "Leader_enroll": 170280107006,
            "Leader_name": "Babariya Dhruvkumar Kiritbhai",
            "Leader_email": "babariya.dhruvkumar.904@ldce.ac.in",
            "Internal_guide": "Prof TAChampaneriya"
        },
        {
            "id": 2,
            "Batch": "2020-2021",
            "Project_id": "2020-2021-02",
            "Project_type": "Null",
            "Project_name": "Pushkr - Push Notifications ",
            "Abstract": "Null",
            "Project_area": "Website/Portal/Software",
            "Langauge": "Null",
            "Company_name": "Null",
            "Leader_enroll": 170280107065,
            "Leader_name": "Yash Panchal",
            "Leader_email": "panchalyash914@gmail.com",
            "Internal_guide": "Prof TAChampaneriya"
        },
        {
            "id": 3,
            "Batch": "2020-2021",
            "Project_id": "2020-2021-03",
            "Project_type": "Null",
            "Project_name": "Dive In Unemployment",
            "Abstract": "Null",
            "Project_area": "Null",
            "Langauge": "Null",
            "Company_name": "Null",
            "Leader_enroll": 180283107013,
            "Leader_name": "Juhi Pariyal",
            "Leader_email": "juhipariyal@gmail.com",
            "Internal_guide": "Prof PrachiPancholi"
        },
        {
            "id": 4,
            "Batch": "2020-2021",
            "Project_id": "2020-2021-04",
            "Project_type": "Null",
            "Project_name": "The AI",
            "Abstract": "The goal of this project was to create a tool for detecting the language patterns that characterize fake and real news through the use of online machine learning methods.",
            "Project_area": "IOT",
            "Langauge": "Null",
            "Company_name": "Null",
            "Leader_enroll": 170280107089,
            "Leader_name": "PATEL UMANG JASWANTBHAI",
            "Leader_email": "theumangpatelu2p@gmail.com",
            "Internal_guide": "Prof HBPandya"
        }
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Batch</TableCell>
                        <TableCell className="tableCell">Project ID</TableCell>
                        <TableCell className="tableCell">Title</TableCell>
                        <TableCell className="tableCell">Project Area</TableCell>
                        <TableCell className="tableCell">Leader</TableCell>
                        <TableCell className="tableCell">Internal_guide</TableCell>



                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.Batch}</TableCell>
                            <TableCell className="tableCell">{row.Project_id}</TableCell>

                            <TableCell className="tableCell">{row.Project_name}</TableCell>
                            <TableCell className="tableCell">{row.Project_area}</TableCell>
                            <TableCell className="tableCell">{row.Leader_name}</TableCell>
                            <TableCell className="tableCell">{row.Internal_guide}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List