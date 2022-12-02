import {
  Card,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Button,
  Container,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

function RegisterForm() {
  let auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
      <Card sx={{ minWidth: 275, maxWidth: 800 }}>
        <Box component="form" noValidate sx={{ m: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="Nom"
            label="Nom"
            id="Nom"
            autoFocus
            onChange={(e) => setNom(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Prenom"
            label="Prenom"
            id="Prenom"
            onChange={(e) => setPrenom(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Description"
            label="Description"
            placeholder="Une petite description de vous, juste vous :)"
            id="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="motDePasse"
            label="Mot de passe"
            type="password"
            id="motDePasse"
            autoComplete="current-password"
            onChange={(e) => setMotDePasse(e.target.value)}
          />
          <Button
            onClick={() => auth.register({ email, motDePasse, description, nom, prenom })}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            S'inscrire
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}

export default RegisterForm;
