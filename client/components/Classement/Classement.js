import React, { useState, useEffect } from 'react';
import { Container, Box, IconButton, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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
    <Container>
      <Typography variant="h3">Classement des joueurs</Typography>
      
    </Container>
  );
}

export default Classement;
