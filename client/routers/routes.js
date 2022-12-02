import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Home from '../components/Home';
import PageQuizz from '../components/PageQuizz/PageQuizz';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';
import Classement from '../components/Classement/Classement';
import Quizz from '../components/Quizz/Quizz';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <HistoriqueQuizz />,
  },
  {
    path:'classement',
    element:<Classement/>
  },
  {
    path:'PageQuizz',
    element:<PageQuizz/>
  },
  {
    path:'quizz',
    element: <Quizz/>
  },
  {
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  }
]);

export default router;
