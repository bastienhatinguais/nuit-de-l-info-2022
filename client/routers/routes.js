import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Classement from '../components/Classement/Classement';

import Home from '../components/Home';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'classement',
    element:<Classement/>
  }
]);

export default router;
