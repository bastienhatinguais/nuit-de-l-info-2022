import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Home from '../components/Home';
<<<<<<< HEAD
import PageQuizz from '../components/PageQuizz/PageQuizz';
=======
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';
import Classement from '../components/Classement/Classement';
import Quizz from '../components/Quizz/Quizz';
>>>>>>> 0fc10abf8c25628fbf3a20bd40736682c8e899ee

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
<<<<<<< HEAD
    path:'PageQuizz',
    element:<PageQuizz/>
=======
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  },
  {
    path:'quizz',
    element: <Quizz/>
>>>>>>> 0fc10abf8c25628fbf3a20bd40736682c8e899ee
  }
]);

export default router;
