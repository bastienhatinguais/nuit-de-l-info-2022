import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Accueil from '../components/Accueil';
import LoginForm from '../components/authentification/loginForm';
import RegisterForm from '../components/authentification/registerForm';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/',
    element: <Accueil />,
  },
  {
    path: '/register',
    element: <RegisterForm />,
  },
]);

export default router;
