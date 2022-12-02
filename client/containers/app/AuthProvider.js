import { createContext, useState } from 'react';
import { api } from '../../utils/api';
import { setLocalStorage, clearLocalStorage } from '../../utils/storage';
import React from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AuthProvider({ children }) {
  let [user, setUser] = useState(null);
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
      })
      .catch((er) => {
        console.log(er);
      });
  };

  let logout = () => {
    setUser(null);
    clearLocalStorage();
    navigate('/');
  };

  let value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
