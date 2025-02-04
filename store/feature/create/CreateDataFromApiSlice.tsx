import { IData } from "@/components/create/CreateData";
import { processCreateDatas } from "@/model/CreateDataModel";
import { RootStore } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    createdDatas: IData[];
}

const initialState: IInitialState = {
    createdDatas: [],
};

export const createDataFromApiSlice = createSlice({
    name: "createDataFromApiSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const { value } = action.payload;
            state.createdDatas = processCreateDatas(value) as IData[];
        },
    },
});

export const {
    setState
} = createDataFromApiSlice.actions;
export default createDataFromApiSlice.reducer;
export const createDataFromApiSelector = (state: RootStore) => {
    state.autoDeleteTodoListSlice;
};
