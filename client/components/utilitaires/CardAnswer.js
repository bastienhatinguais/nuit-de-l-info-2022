import React from "react"
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";



function CardAnswer(props) {
    const reponse = props.item
    if (props.questionValide) {
        return (
            <Card onClick={props.handleClick?.bind(this, props.item.id)} sx={{ minWidth: 350, minHeight: 75,borderRadius: '16px' }} style={reponse.estVrai ? { backgroundColor: "#99FF99 ",display:'flex',justifyContent:'center',alignItems:'center' } : { backgroundColor: "#FE6565",display:'flex',justifyContent:'center',alignItems:'center' }}>
                <CardContent>
                    {reponse.text}
                </CardContent>
            </Card>


        )
    }
    else {
        return (

            <Card onClick={props.handleClick?.bind(this, props.item.id)} sx={{ minWidth: 350, minHeight: 75,borderRadius: '16px' }} style={props.clicked ? { backgroundColor: "#FF7B9B" ,display:'flex',justifyContent:'center',alignItems:'center'} : { backgroundColor: "#FEC9DC",display:'flex',justifyContent:'center',alignItems:'center' }}>
                <CardContent>
                    {reponse.text}
                </CardContent>
            </Card>
        )
    }

}

export default CardAnswer