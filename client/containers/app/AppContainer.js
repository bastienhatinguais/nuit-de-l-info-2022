import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import custom components
import MainRouter from '../../routers/routes';
import AuthProvider from './AuthProvider';

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <MainRouter />
        </AuthProvider>
      </Router>
    );
  }
}

export default hot(module)(AppContainer);
