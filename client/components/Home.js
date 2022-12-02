import React from 'react';

import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { HiddenEasterEgg } from "react-hidden-easter-egg";
import { ConfettiCanvas } from "react-raining-confetti";

function Home() {
    return (
        <Container>
            <Typography variant="h3">Le sida c'est trop génial</Typography>
            <HiddenEasterEgg
                code={["s","e","x","e"]}
                resetEggMs={10000}
                cb={() => console.log("start raining")}
                key="13123"
            >
                Incroyable tu as trouvé un easter egg ! Bravo ! 
                <ConfettiCanvas active={true} fadingMode="LIGHT" stopAfterMs={5000} />
            </HiddenEasterEgg>
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
                    <Button variant="contained">Classement joueurs</Button>
                </Grid>
            </Grid>
            Je suis un mot de 4 lettres commençant par S et finissant par ma deuxième lettre.
        </Container>
    )
}

export default Home