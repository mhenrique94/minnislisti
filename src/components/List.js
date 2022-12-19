import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todos )

  return (
    <List>
      {
        todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText> {todo.title}</ListItemText>
        </ListItem>
        ))
      }
    </List>
  )
}

export default TodoList