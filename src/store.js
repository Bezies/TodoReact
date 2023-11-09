import { configureStore } from "@reduxjs/toolkit";
import todolist from "./features/todolist";
import darkmode from "./features/darkmode";

export const store = configureStore({
    reducer: {
        todolist,
        darkmode
    }
})