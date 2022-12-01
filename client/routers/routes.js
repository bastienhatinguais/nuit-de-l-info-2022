import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';
import Classement from '../components/Classement/Classement';
import Quizz from '../components/Quizz/Quizz';

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
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  },
  {
    path:'quizz',
    element: <Quizz/>
  }
]);

export default router;
