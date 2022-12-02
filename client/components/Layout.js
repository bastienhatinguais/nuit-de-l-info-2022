import { Link, Outlet } from 'react-router-dom';
import AuthStatus from './authentification/authStatus';
import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <AuthStatus />
      </AppBar>
      <Outlet />
    </>
  );
}
