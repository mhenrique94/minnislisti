import * as React from 'react';
import { Box, Container } from '@mui/material'
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Container maxWidth="m" fixed>
          <Box sx={{ bgcolor: '#dbdbdb', height: '80vh'}} />
        </Container>
      </div>
  );
}

export default App;
