import { RootStore } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listDatas: [],
};

export const autoDeleteTodoListSlice = createSlice({
    name: "autoDeleteTodoListSlice",
    initialState: initialState,
    reducers: {

    },
});

export const {} = autoDeleteTodoListSlice.actions;
export default autoDeleteTodoListSlice.reducer;
export const autoDeleteTodoListSelector = (state: RootStore) => state.autoDeleteTodoListSlice;