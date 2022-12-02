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
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { api } from '../../utils/api';
import { setLocalStorage } from '../../utils/storage';

function loginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let auth = useContext(AuthContext);

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
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            autoFocus
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir de moi"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => auth.login(email, password)}
          >
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <Button>Mot de passe oublié ?</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                <Button>Pas de compte ? Inscrivez-vous 😄 </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
}

export default loginForm;
