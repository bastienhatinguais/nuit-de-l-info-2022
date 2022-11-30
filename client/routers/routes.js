import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Accueil from '../components/Accueil';

const Router = () => (
  <Fragment>
    <Routes>
      <Route exact path="/" element={<Accueil />} />
    </Routes>
  </Fragment>
);

export default Router;
