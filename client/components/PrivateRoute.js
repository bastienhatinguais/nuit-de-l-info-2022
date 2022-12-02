import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getLocalStorage } from '../utils/storage';

const PrivateRoute = (props) => {
  const token = getLocalStorage('token');
  return <>{token ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default PrivateRoute;
