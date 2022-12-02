import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AuthStatus() {
  let auth = useContext(AuthContext);
  return !auth.user ? (
    <Link to="/login">
      <Button color="inherit">Se connecter</Button>
    </Link>
  ) : (
    <p>
      Bienvenue {auth.user.prenom}!{' '}
      <Button
        color="inherit"
        onClick={() => {
          auth.logout();
        }}
      >
        Se déconnecter
      </Button>
    </p>
  );
}
