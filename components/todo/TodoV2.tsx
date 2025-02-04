"use client";
import { setState, setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootStore } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";

export type IListData = {
    id: string;
    name: string;
    type: "Fruit" | "Vegetable" | "None";
    status: "Fruit" | "Vegetable" | "None";
};

type Props = {
    Datas: IListData[];
};

export default function TodoV2({ Datas }: Props) {
    const dispatch = useDispatch();
    const { listDatas } = useSelector((state: RootStore) => state.autoDeleteTodoListSlice);

    useEffect(() => {
        dispatch(setState({ value: Datas, keyValue: "listDatas" }));
    }, [Datas]);

    useEffect(() => {
        listDatas.map((item) => {
            if (item.status !== "None") {
                setTimeout(() => {
                    dispatch(setStatus({ id: item.id, value: "None" }));
                }, 5000);
            }
        });
    }, [listDatas]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Column title="List" listDatas={listDatas} type="None"/>
            <Column title="Fruit" listDatas={listDatas} type="Fruit" featureFag={true}/>
            <Column title="Vegetable" listDatas={listDatas} type="Vegetable" featureFag={true}/>
        </div>
    );
}
