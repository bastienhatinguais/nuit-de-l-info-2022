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

const router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/PageQuizz" element={<PageQuizz />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/historiqueQuizz" element={<HistoriqueQuizz />} />

        <Route
          path="/protected"
          element={
            <RequireAuth>
              <h1>OUIIII</h1>
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default router;
