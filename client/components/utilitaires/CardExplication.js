import React from "react"
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";



function CardExplication(props){
    const explication=props.explication
 return(
<Card sx={{ minWidth: 800 , minHeight: 150}} style={{backgroundColor: "grey"}}>
    <CardContent>
        {explication}
    </CardContent>
</Card>

 )
}

export default CardExplication