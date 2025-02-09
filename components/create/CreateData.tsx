"use client";
import { setState } from "@/store/feature/create/CreateDataFromApiSlice";
import { RootStore } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../common/Card";

export type IData = Record<string, any>;

type NestedObject = Record<string, any>;

type Props = {
    datas: IData[];
};

export default function CreateData({ datas }: Props) {
    const dispatch = useDispatch();

    const { createdDatas } = useSelector((state: RootStore) => state.createDataFromApiSlice);

    const transformObject = (obj: NestedObject): NestedObject => {
        const result: NestedObject = {};

        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                const entries = Object.entries(obj[key]);
                result[key] = entries.length > 0 ? entries.map(([k, v]) => ({ [k]: v })) : obj[key];
            } else {
                result[key] = obj[key];
            }
        }

        return result;
    };

    const transformNestedObject = (data: NestedObject): NestedObject => {
        const transformed: NestedObject = {};

        for (const key in data) {
            transformed[key] = transformObject(data[key]);
        }

        return transformed;
    };

    useEffect(() => {
        dispatch(setState({ value: datas }));
    }, [datas]);

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <Card departments={transformNestedObject(createdDatas)} />
        </div>
    );
}
