"use client";
import React, { useEffect } from "react";
import { RootStore } from "@/store/store";
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";

export type IListData = {
    id: string;
    name: string;
    type: "Fruit" | "Vegetable" | "None";
    status: "Fruit" | "Vegetable" | "None";
};

type Props = {
    datas: IListData[];
};

export default function TodoV1({ datas }: Props) {
    const dispatch = useDispatch();
    const { listDatas } = useSelector((state: RootStore) => state.autoDeleteTodoListSlice);

    useEffect(() => {
        dispatch(setState({ value: datas, keyValue: "listDatas" }));
    }, [datas]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Column title="List" listDatas={listDatas} type="None" />
            <Column title="Fruit" listDatas={listDatas} type="Fruit" />
            <Column title="Vegetable" listDatas={listDatas} type="Vegetable" />
        </div>
    );
}
