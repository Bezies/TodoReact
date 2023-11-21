import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  List: [
    {
      id: nanoid(4),
      content: "Complete online JavaScript course",
      completed: true,
      active: false,
    },
    {
      id: nanoid(4),
      content: "Jog around the park 3x",
      completed: false,
      active: true,
    },
    {
      id: nanoid(4),
      content: "10 minutes meditation",
      completed: false,
      active: true,
    },
    {
      id: nanoid(4),
      content: "Read for 1 hour",
      completed: false,
      active: true,
    },
    {
      id: nanoid(4),
      content: "Pick up groceries",
      completed: false,
      active: true,
    },
    {
      id: nanoid(4),
      content: "Complete Todo App on Frontend Mentor",
      completed: false,
      active: true,
    },
  ],
  active: [],
};

export const TodoList = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.List.push({
        id: action.payload.id,
        content: action.payload.content,
        completed: action.payload.completed,
        active: action.payload.active,
      });
    },
    completedTodo: (state, action) => {
      state.List.find((el) => el.id === action.payload).completed = true;
      state.List.find((el) => el.id === action.payload).active = false;
    },
    deleteTodo: (state, action) => {
      const TodoIndex = state.List.findIndex((el) => el.id === action.payload);
      state.List.splice(TodoIndex, 1);
    },
    clearCompleteTodo: (state, action) => {
      const index = state.List.findIndex((el) => el.id === action.payload);
      state.List.splice(index, 1);
    },
  },
});

export const { addNewTodo, completedTodo, deleteTodo, clearCompleteTodo } =
  TodoList.actions;
export default TodoList.reducer;
