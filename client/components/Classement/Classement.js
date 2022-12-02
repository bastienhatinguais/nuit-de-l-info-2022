import React, { useState, useEffect } from 'react';
import { Container, Grid, Chip, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { padding } from '@mui/system';


function Classement() {






  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container style={{ marginBottom: 20 }}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>Classement des joueurs</Typography>
      <Grid container spacing={2} style={{
        backgroundColor: '#E2EEFC'
      }}>
        <Grid item xs={4}
        >
          <Grid container style={{ display: 'flex', justifyContent: "center", marginTop: 100, marginBottom: -100 }}
          >
            <Card sx={{ minWidth: 150, minHeight: 50 }} style={{ paddingTop: 30, marginBottom: 30, backgroundColor: "#F2577C", borderRadius: "20px" }}>
              <Typography sx={{ fontSize: 14 }} style={{ display: 'flex', justifyContent: "center" }} color="white" gutterBottom>Pseudo 2</Typography></Card >
            <img src="img/medaille2.png" alt="Podium" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ display: 'flex', justifyContent: "center" }}
          >
            <Card sx={{ minWidth: 150, minHeight: 50 }} style={{ paddingTop: 30, marginBottom: 30, backgroundColor: "#F2577C", borderRadius: "20px" }}>
              <Typography sx={{ fontSize: 14 }} style={{ display: 'flex', justifyContent: "center" }} color="white" gutterBottom>Pseudo 1</Typography></Card >
            <img src="img/medaille1.png" alt="Podium" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ display: 'flex', justifyContent: "center", marginTop: 100, marginBottom: -100 }}
          >
            <Card sx={{ minWidth: 150, minHeight: 50 }} style={{ paddingTop: 30, marginBottom: 30, backgroundColor: "#F2577C", borderRadius: "20px" }}>
              <Typography sx={{ fontSize: 14 }} style={{ display: 'flex', justifyContent: "center" }} color="white" gutterBottom>Pseudo 3</Typography></Card >
            <img src="img/medaille3.png" alt="Podium" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <img src="img/podium.png" alt="Podium" style={{ width: '100%', }} />
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: "center" }} xs={4}>
          <Chip label="Score 2" style={{ color: "white", backgroundColor: "#F2577C" }} />
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: "center" }} xs={4}>
          <Chip label="Score 1" style={{ color: "white", backgroundColor: "#F2577C" }} />
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: "center" }} xs={4}>
          <Chip label="Score 3" style={{ color: "white", backgroundColor: "#F2577C" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Classement;
