import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Accueil from '../components/Accueil';
import LoginForm from '../components/authentification/loginForm';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/',
    element: <Accueil />,
  },
]);

export default router;
