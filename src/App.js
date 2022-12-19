import * as React from 'react';
import { Box, Container } from '@mui/material'
import TodoList from './components/List'
import AddTodoForm from './components/AddTodoForm';
import './styles/App.css';

function App() {
  return (
    <>
      <div className="App">
        <Container maxWidth="sm" fixed>
          <Box>
          <AddTodoForm/>
          </Box>
          <Box sx={{ bgcolor: '#dbdbdb', borderRadius: '8px' }}>
            <TodoList />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
