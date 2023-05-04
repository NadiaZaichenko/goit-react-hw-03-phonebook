import React from 'react';
import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import {App}  from 'components/App';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#83dc577a',
    sectionBackgroundColor: '#f0f0f0',
    buttonBackgroundColor: '#29ff189c',
  },
  containerBorderRadius: '20px',
  inputBorderRadius: '8px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);