import React from 'react';

import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



function Home() {
    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh' }}
            >
                <Grid
                    container
                    xs={12}
                    md={3}
                    spacing={20}
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: '90vh' }}
                >
                    <Grid
                        item
                        style={{ display: 'flex', justifyContent: "center" }}
                    >
                        <Link to={"PageQuizz"}>
                            <Button variant="contained"
                                style={{
                                    minWidth: '30vh',
                                    minHeight: '10vh',
                                    backgroundColor: '#F2577C',
                                    borderRadius: '20px',
                                }}>Lancer un Quizz</Button>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        style={{ display: 'flex', justifyContent: "center" }}
                    >
                        <Link to={'classement'}>  <Button variant="contained"
                            style={{
                                minWidth: '30vh',
                                minHeight: '10vh',
                                backgroundColor: '#F2577C',
                                borderRadius: '20px',
                            }}>Classement joueurs</Button></Link>
                    </Grid>
                    <Grid
                        item
                        md={4}
                        style={{ display: 'flex', justifyContent: "center" }}
                    >
                        <Link to={"historiqueQuizz"}>
                            <Button variant="contained"
                                style={{
                                    minWidth: '30vh',
                                    minHeight: '10vh',
                                    backgroundColor: '#F2577C',
                                    borderRadius: '20px',
                                }}>Historique des Quizz</Button>
                        </Link>
                    </Grid>

                </Grid>
                <Grid
                    container
                    xs={12}
                    md={9}
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: '90vh' }}
                >
                    <Card sx={{
                        minWidth: 500,
                        minHeight: 500,
                        backgroundColor: '#E2EEFC',
                        border: '5px solid #F2577C',
                        borderRadius: '20px',
                    }}>
                        <CardContent>
                        <CardMedia
                            component="img"
                            image="img/accueil.png"
                            alt="Image de la carte"
                        />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home