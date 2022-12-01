import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';


const Router = () => (
  <Fragment>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Fragment>
);

export default Router;
