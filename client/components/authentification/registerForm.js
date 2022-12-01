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
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  function RegisterForm() {
    return (
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Card sx={{ minWidth: 275, maxWidth: 800 }}>
          <Box
            component="form"
            onSubmit={() => console.log('Submit du form !')}
            noValidate
            sx={{ m: 2 }}
          >

            <TextField
              margin="normal"
              required
              fullWidth
              name="Nom"
              label="Nom"
              id="Nom"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Description"
              label="Description"
              placeholder ="Une petite description de vous, juste vous :)"
              id="Nom"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
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
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              S'inscrire
            </Button>
          </Box>
        </Card>
      </Grid>
    );
  }
  
  export default RegisterForm;
  