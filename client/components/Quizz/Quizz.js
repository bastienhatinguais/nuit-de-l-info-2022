import React, { useState } from 'react';
import { Container, Grid,Button, Item } from '@mui/material';
import ProgressBar from './progressBar';
import Timer from '../Timer/Timer';

function Quizz() {

  return (
    <Container>
    <Timer/>
                <Grid 
                    container 
                    display="flex"
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
        >
        <Grid item 
                    style={{ display: 'flex', justifyContent: "center" }}>
        <Button item variant="contained">Question</Button>
        </Grid>
        </Grid>
                <Grid 
                    container 
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
                >
                <Grid item md={6}>
                <Button variant="contained">Réponse 3</Button>

    </Grid>
    <Grid item md={6}>
    <Button variant="contained">Réponse 4</Button>
    </Grid>
            </Grid>
        <Button variant="contained"
        style={{ display: 'flex', justifyContent: "center" }}>
        
        Valider</Button>
    </Container>
  );
}

export default Quizz;
