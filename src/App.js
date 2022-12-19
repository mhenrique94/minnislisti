import * as React from 'react';
import { Box, Container } from '@mui/material'
import TodoList from './components/List'
import AddTodoForm from './components/AddTodoForm';
import './styles/App.css';

function App() {
  return (
    <>
      <div className="App">
        <Container maxWidth="m" fixed>
          <Box>
          <AddTodoForm/>
          </Box>
          <Box sx={{ bgcolor: '#dbdbdb', height: '80vh', borderRadius: '8px' }}>
            <TodoList />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
