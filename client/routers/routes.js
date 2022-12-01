import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
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
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  }
]);

export default router;
