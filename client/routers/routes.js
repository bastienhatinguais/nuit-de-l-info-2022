import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Classement from '../components/Classement/Classement';


import Home from '../components/Home';
import PageQuizz from '../components/PageQuizz/PageQuizz';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'classement',
    element:<Classement/>
  },
  {
    path:'PageQuizz',
    element:<PageQuizz/>
  }
]);

export default router;
