import React from 'react';


import { Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"

function Home() {
    return (
        <Container>
            <Grid 
                container 
                spacing={2}
                alignItems="center" 
                justifyContent="center"
                style={{ minHeight: '90vh'}}
            >
                <Grid 
                    item 
                    md={4}
                    style={{display: 'flex', justifyContent: "center"}}
                >
                    <Button variant="contained">Lancer un Quizz</Button>
                </Grid>
                <Grid 
                    item 
                    md={4}
                    style={{display: 'flex', justifyContent: "center"}}
                >
                    <Button variant="contained">Historique des Quizz</Button>
                </Grid>
                <Grid 
                    item 
                    md={4}
                    style={{display: 'flex', justifyContent: "center"}}
                >
                  <Link to={'classement'}>  <Button variant="contained">Classement joueurs</Button></Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home