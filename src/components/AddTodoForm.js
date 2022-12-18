import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/redux/todoSlice";
import { TextField, Box, Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const AddTodoForm = () => {
  const [value, setValue] = useState()
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addTodo({
      title: value
    }))

  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100%', my: 2 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Box sx={{ display: 'flex' }} style={{ width: '100%' }}>
          <TextField id="outlined-basic" placeholder="New task" value={value} variant="outlined" color="primary" required focused sx={{ input: { color: '#504475' }, flexGrow: 1 }}
        onChange={(event) => setValue(event.target.value)}>
          </TextField>
          <Button color="primary" type="submit">
            <AddCircle />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AddTodoForm