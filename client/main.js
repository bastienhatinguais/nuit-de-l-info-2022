import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

import App from './containers/app/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';

const mountNode = document.getElementById('root');

const theme = createTheme({
  spacing: 4,
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
  },
});

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Suspense>,
  mountNode
);
