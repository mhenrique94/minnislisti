import * as React from 'react';
import { Box, Container } from '@mui/material'
// import List from './components/List'
import AddTodoForm from './components/AddTodoForm';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Container maxWidth="m" fixed>
          <Box>
          <AddTodoForm/>
          </Box>
          <Box sx={{ bgcolor: '#dbdbdb', height: '80vh', borderRadius: '8px' }} />
          {/* <List /> */}
        </Container>
      </div>
    </>
  );
}

export default App;
