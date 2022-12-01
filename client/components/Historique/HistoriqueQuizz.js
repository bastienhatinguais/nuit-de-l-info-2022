import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import TableauQuizz from './Table/TableauQuizz';

const HistoriqueQuizz = () => {

  const [historique, setHistorique] = useState([])

  useEffect(()=>{
    setHistorique(
      [
        { date: "02/03/2022", score: "10/10", duree: "40" },
        { date: "02/03/2022", score: "10/10", duree: "40" }
      ]
    )
  },[])

  return (
    <Container>
      <Typography variant="h3">Historique Quizz</Typography>
      <TableauQuizz historique={historique}/>
    </Container>
  )
}

export default HistoriqueQuizz