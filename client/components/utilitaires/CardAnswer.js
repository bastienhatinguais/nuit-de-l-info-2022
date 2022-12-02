import React from "react"
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";



function CardAnswer(props) {
    const reponse = props.item
    if (props.questionValide) {
        return (
            <Card onClick={props.handleClick?.bind(this, props.item.id)} sx={{ minWidth: 350, minHeight: 75 }} style={reponse.estVrai ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
                <CardContent>
                    {reponse.text}
                </CardContent>
            </Card>


        )
    }
    else {
        return (

            <Card onClick={props.handleClick?.bind(this, props.item.id)} sx={{ minWidth: 350, minHeight: 75 }} style={props.clicked ? { backgroundColor: "darkgrey" } : { backgroundColor: "grey" }}>
                <CardContent>
                    {reponse.text}
                </CardContent>
            </Card>
        )
    }

}

export default CardAnswer