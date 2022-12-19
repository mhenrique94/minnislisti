import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toggleComplete } from "../app/redux/todoSlice";

import { List, ListItem,
  IconButton,
  FormControlLabel,
  Checkbox,
  Divider,
  Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const todos = useSelector((state) => state.todos )
  const dispatch = useDispatch()

  const handleToggle = (todo) => {
    dispatch(
      toggleComplete({id: todo.id, title: todo.title, completed: !todo.completed })
      )
  }

  return (
    <List>
      {
        todos.map((todo) => (
              <ListItem key={todo.id} >
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={14}>
                    <FormControlLabel control={<Checkbox/>} label={todo.title}
                    onChange={handleToggle(todo)} checked={todo.completed}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Divider orientation="vertical" flexItem />
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>

        ))
      }
    </List>
  )
}

export default TodoList