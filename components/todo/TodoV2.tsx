"use client";
import { setState, setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootStore } from "@/store/store";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import { IListData } from "./TodoV1";

type Props = {
    datas: IListData[];
};

export default function TodoV2({ datas }: Props) {
    const dispatch = useDispatch();
    const { listDatas } = useSelector((state: RootStore) => state.autoDeleteTodoListSlice);
    const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

    useEffect(() => {
        dispatch(setState({ value: datas, keyValue: "listDatas" }));
    }, [datas]);

    useEffect(() => {
        listDatas.map((item) => {
            if (item.status !== "None") {
                timeoutRefs.current[item.id] = setTimeout(() => {
                    dispatch(setStatus({ id: item.id, value: "None" }));
                }, 5000);
            } else if (timeoutRefs.current[item.id]) {
                clearTimeout(timeoutRefs.current[item.id]);
            }
        });
    }, [listDatas]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Column title="List" listDatas={listDatas} type="None" />
            <Column title="Fruit" listDatas={listDatas} type="Fruit" featureFag={true} />
            <Column title="Vegetable" listDatas={listDatas} type="Vegetable" featureFag={true} />
        </div>
    );
}
