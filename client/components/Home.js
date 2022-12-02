import React from 'react';

import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Timer from './Timer/Timer';

function Home() {
    return (
        <Container>
            <Typography variant="h3">Le sida c'est trop génial</Typography>
            <Timer/>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh' }}
            >
                <Grid
                    item
                    md={4}
                    style={{ display: 'flex', justifyContent: "center" }}
                >
                    <Link to={"quizz"}>
                    <Button variant="contained">Lancer un Quizz</Button>
                    </Link>
                </Grid>
                <Grid
                    item
                    md={4}
                    style={{ display: 'flex', justifyContent: "center" }}
                >
                    <Link to={"historiqueQuizz"}>
                        <Button variant="contained">Historique des Quizz</Button>
                    </Link>
                </Grid>
                <Grid
                    item
                    md={4}
                    style={{ display: 'flex', justifyContent: "center" }}
                >
                  <Link to={'classement'}>  <Button variant="contained">Classement joueurs</Button></Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home