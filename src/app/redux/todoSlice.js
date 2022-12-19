import { createSlice } from "@reduxjs/toolkit";

const todoSlice  = createSlice ({
  name: 'todos',
  initialState: [
    { id: 1, title: "Comprar pão de forma", completed: true },
    { id: 3, title: "Comprar macarrão", completed: false },
    { id: 7, title: "Comprar um liquidificador no mercado livre", completed: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }

      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo)=> todo.id === action.payload.id
      )

      state[index].completed = action.payload.completed
    }
  }
})

export const { addTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer