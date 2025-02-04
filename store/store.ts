import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import autoDeleteTodoListSlice from "./feature/todo/AutoDeleteTodoListSlice";
import createDataFromApiSlice from "./feature/create/CreateDataFromApiSlice";

export const store = configureStore({
    reducer: {
        autoDeleteTodoListSlice,
        createDataFromApiSlice
    },
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();