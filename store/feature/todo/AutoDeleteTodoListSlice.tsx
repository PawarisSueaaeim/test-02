import { RootStore } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

export type ITodoList = {
    listDatas: {
        id: string;
        name: string;
        type: "Fruit" | "Vegetable" | "None";
        status: "Fruit" | "Vegetable" | "None";
    }[],
}

const initialState: ITodoList = {
    listDatas: [],
};

export const autoDeleteTodoListSlice = createSlice({
    name: "autoDeleteTodoListSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const {value, keyValue} = action.payload;
            switch (keyValue) {
                case "listDatas": {
                    state.listDatas = value;
                    break;
                }
            }
        },
    },
});

export const {} = autoDeleteTodoListSlice.actions;
export default autoDeleteTodoListSlice.reducer;
export const autoDeleteTodoListSelector = (state: RootStore) => state.autoDeleteTodoListSlice;