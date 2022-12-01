import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HistoriqueQuizz from '../components/Historique/HistoriqueQuizz';

import Home from '../components/Home';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'historiqueQuizz',
    element: <HistoriqueQuizz/>
  }
]);

export default router;
