import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Home from '../components/Home';
import PageQuizz from '../components/PageQuizz/PageQuizz';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';
import Classement from '../components/Classement/Classement';


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
    element:<PageQuizz/>},
    {
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  }
]);

export default router;
