import { processListDatas } from "@/model/TodoListModel";
import { RootStore } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

export type ITodoList = {
    listDatas: {
        id: string;
        name: string;
        type: "Fruit" | "Vegetable" | "None";
        status: "Fruit" | "Vegetable" | "None";
    }[],
    onDragActiveCard: string;
    onDragActiveType: string;
}

const initialState: ITodoList = {
    listDatas: [],
    onDragActiveCard: "",
    onDragActiveType: "",
};

export const autoDeleteTodoListSlice = createSlice({
    name: "autoDeleteTodoListSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const {value, keyValue} = action.payload;
            switch (keyValue) {
                case "listDatas": {
                    state.listDatas = processListDatas(value);
                    break;
                }
                case "onDragActiveCard": {
                    state.onDragActiveCard = value;
                    break;
                }
                case "onDragActiveType": {
                    state.onDragActiveType = value;
                    break;
                }
            }
        },
        setStatus: (state, action) => {
            const { id, value } = action.payload;
            state.listDatas.find((item) => item.id === id)!.status = value;
        }
    },
});

export const {
    setState,
    setStatus
} = autoDeleteTodoListSlice.actions;
export default autoDeleteTodoListSlice.reducer;
export const autoDeleteTodoListSelector = (state: RootStore) => state.autoDeleteTodoListSlice;