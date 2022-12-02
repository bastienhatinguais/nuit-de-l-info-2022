import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React from 'react'


const TableauQuizz = ({historique}) => {

    return (
        <TableContainer style={{ borderRadius: "20px" }}>
            <Table>
                <TableHead style={{ backgroundColor: "#8CB4E3",fontSize: 44 }}>
                    <TableRow>
                        <TableCell><Typography sx={{ fontSize: "3rem" }}><img src="img/date-limite.png" width={"40rem"}/>Date</Typography> </TableCell>
                        <TableCell><Typography sx={{ fontSize: "3rem" }}><img src="img/score-eleve.png" width={"40rem"}/>Score</Typography> </TableCell>
                        <TableCell><Typography sx={{ fontSize: "3rem" }}><img src="img/sablier.png" width={"40rem"}/>Durée</Typography> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: "#E2EEFC" }}>
                    {
                        historique.map((quizz=>{
                            return(
                                <TableRow>
                                    <TableCell>{quizz.date}</TableCell>
                                    <TableCell>{quizz.score}</TableCell>
                                    <TableCell>{quizz.duree}</TableCell>
                                </TableRow>
                            )
                        }))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableauQuizz