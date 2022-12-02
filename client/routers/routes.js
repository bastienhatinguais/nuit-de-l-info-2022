import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageQuizz from '../components/PageQuizz/PageQuizz';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';
import Classement from '../components/Classement/Classement';
import Quizz from '../components/Quizz/Quizz';
import Accueil from '../components/Accueil';
import LoginForm from '../components/authentification/loginForm';
import RequireAuth from '../components/authentification/requireAuth';
import Layout from '../components/Layout';
import RegisterForm from '../components/authentification/registerForm';

const router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/classement"
          element={
            <RequireAuth>
              <Classement />
            </RequireAuth>
          }
        />
        <Route
          path="/PageQuizz"
          element={
            <RequireAuth>
              <PageQuizz />
            </RequireAuth>
          }
        />
        <Route
          path="/quizz"
          element={
            <RequireAuth>
              <Quizz />
            </RequireAuth>
          }
        />
        <Route
          path="/historiqueQuizz"
          element={
            <RequireAuth>
              <HistoriqueQuizz />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default router;
