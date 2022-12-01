import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import Quizz from '../components/Quizz/Quizz';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
