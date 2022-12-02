import React, { useContext } from 'react';
import Home from './Home';
import AuthContext from '../context/AuthContext';

function Accueil() {
  let auth = useContext(AuthContext);
  return !auth.user ? <h1>Page d'accueil !!</h1> : <Home />;
}

export default Accueil;
