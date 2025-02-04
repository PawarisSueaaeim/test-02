"use client";
import { processCreateDatas } from "@/model/CreateDataModel";
import { setState } from "@/store/feature/create/CreateDataFromApiSlice";
import { RootStore } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export type IData = Record<string, any>;

type Props = {
    datas: IData[];
};

export default function CreateData({ datas }: Props) {
    const dispatch = useDispatch();

    const { createdDatas } = useSelector((state: RootStore) => state.createDataFromApiSlice);

    useEffect(() => {
        dispatch(setState({ value: datas }));
    }, [datas]);

    useEffect(() => {
        console.log(createdDatas);
    },[createdDatas]);

    return <div className="flex justify-center items-center">
        Output in Console
    </div>;
}
