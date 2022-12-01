import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';

import Home from '../components/Home';
import Quizz from '../components/Quizz/Quizz';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
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
