import { Box, Button, TextField, Grid } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { api } from '../../utils/api';

function FormPost({ envoyerPost }) {
  const [auteur, setAuteur] = useState('');
  const [texte, setTexte] = useState('');

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <TextField
        required
        id="outlined-required"
        label="Auteur"
        onChange={(e) => setAuteur(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Message"
        onChange={(e) => setTexte(e.target.value)}
        multiline
        row={4}
      />
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="success"
          onClick={() => {
            envoyerPost({ auteur, texte });
          }}
        >
          Envoyer
        </Button>
      </Grid>
    </Box>
  );
}

export default FormPost;
