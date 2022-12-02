import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
