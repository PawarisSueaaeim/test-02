"use client";
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootStore } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import { IListData } from "./TodoV1";

type Props = {
    datas: IListData[];
};

export default function TodoV2({ datas }: Props) {
    const dispatch = useDispatch();
    const { listDatas } = useSelector((state: RootStore) => state.autoDeleteTodoListSlice);

    useEffect(() => {
        dispatch(setState({ value: datas, keyValue: "listDatas" }));
    }, [datas]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Column title="List" listDatas={listDatas} type="None" />
            <Column title="Fruit" listDatas={listDatas} type="Fruit" featureFag={true} />
            <Column title="Vegetable" listDatas={listDatas} type="Vegetable" featureFag={true} />
        </div>
    );
}
