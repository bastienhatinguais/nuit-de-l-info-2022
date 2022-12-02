import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import React from 'react';

export default function RequireAuth({ children }) {
  let auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
