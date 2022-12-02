import React from "react"
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";



function CardQuestion(props){
    const question=props.question
 return(
<Card sx={{ minWidth: 800 , minHeight: 150}} style={{backgroundColor: "grey"}}>
    <CardContent>
        {question.intitule}
    </CardContent>
</Card>

 )
}

export default CardQuestion