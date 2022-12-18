import React from "react";
import { TextField, Box, Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

export default function AddTodoForm() {

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100%', my: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: 'flex' }} style={{ width: '100%' }}>
          <TextField id="outlined-basic" defaultValue={'Add new task'} variant="outlined" color="primary" required focused sx={{ input: { color: '#504475' }, flexGrow: 1 }}>
          </TextField>
          <Button color="primary">
            <AddCircle />
          </Button>
        </Box>
      </Box>
    </>
  )
}
