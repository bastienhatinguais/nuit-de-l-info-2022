import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'


const TableauQuizz = ({historique}) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Durée</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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