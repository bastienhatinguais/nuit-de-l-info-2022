import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

import App from './containers/app/AppContainer';

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
      <App></App>
    </ThemeProvider>
  </Suspense>,
  mountNode
);
