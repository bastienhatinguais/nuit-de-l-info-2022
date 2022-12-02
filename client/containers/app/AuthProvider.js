import { createContext, useState } from 'react';
import { api } from '../../utils/api';
import { setLocalStorage, clearLocalStorage, getLocalStorage } from '../../utils/storage';
import React from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AuthProvider({ children }) {
  let userBase = null;
  if (getLocalStorage('token')) {
    userBase = {
      token: getLocalStorage('token'),
      nom: getLocalStorage('nom'),
      prenom: getLocalStorage('prenom'),
    };
  }
  let [user, setUser] = useState(userBase);
  const navigate = useNavigate();

  let login = (email, motDePasse) => {
    api()
      .post('/auth/login', {
        email,
        motDePasse,
      })
      .then((result) => {
        setUser({ token: result.token, nom: result.nom, prenom: result.prenom });
        setLocalStorage('token', result.token);
        setLocalStorage('prenom', result.prenom);
        setLocalStorage('nom', result.nom);
        navigate('/');
      })
      .catch((er) => {
        console.log(er);
      });
  };

  let register = ({ email, motDePasse, description, nom, prenom }) => {
    api()
      .post('/auth/register', { email, motDePasse, description, nom, prenom })
      .then((result) => {
        setUser({ token: result.token, nom: result.nom, prenom: result.prenom });
        setLocalStorage('token', result.token);
        setLocalStorage('prenom', result.prenom);
        setLocalStorage('nom', result.nom);
        navigate('/');
      })
      .catch((er) => {
        console.log(er);
      });
  };

  let logout = () => {
    setUser(null);
    clearLocalStorage('token');
    clearLocalStorage('prenom');
    clearLocalStorage('nom');
    navigate('/');
  };

  let value = { user, login, logout, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
