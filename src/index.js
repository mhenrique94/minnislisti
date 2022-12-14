import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from '@mui/material'
import theme from './app/theme'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import Navbar from './components/Navbar'
import SideDrawer from './components/Drawer'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <Provider store={store}>
        <Navbar />
        <SideDrawer />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
