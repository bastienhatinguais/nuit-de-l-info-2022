import React, { useState } from 'react';
import { Container, Grid,Button, Item } from '@mui/material';
import ProgressBar from './progressBar';

function Quizz() {

  return (
    <Container>
    <Grid 
                container 
            >
                <Grid 
                    container 
                    direction="row"
                    //Center the items horizontally
                    justifyContent="center"
                    //Center the items vertically
                    alignItems="center"
                >
                <Grid item md={9} >
        <ProgressBar completed="50" bgcolor="red" />
        </Grid>
        <Grid item md={3}>
        <Button variant="contained">Timer</Button>
        </Grid>
        </Grid>
        <Grid 
            container 
            direction="row"
        >
        <Grid item md={12}>
        <Button variant="contained">Question</Button>
        </Grid>
        </Grid>
                <Grid 
                    container 
                    direction="row"
                >
                <Grid item md={6}>
                <Button variant="contained">Réponse 1</Button>

    </Grid>
    <Grid item md={6}>
    <Button variant="contained">Réponse 2</Button>
    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                >
                <Grid item md={6}>
                <Button variant="contained">Réponse 3</Button>

    </Grid>
    <Grid item md={6}>
    <Button variant="contained">Réponse 4</Button>
    </Grid>
            </Grid>
            <Grid item md={12}>
        <Button variant="contained">Valider</Button>
        </Grid>
            </Grid>
    </Container>
  );
}

export default Quizz;
