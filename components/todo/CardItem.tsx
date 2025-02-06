"use client";
import { setState, setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { IListData } from "./TodoV1";

type Props = {
    id: string;
    name: string;
    type: "Fruit" | "Vegetable" | "None";
    status: "Fruit" | "Vegetable" | "None";
    timer: number;
};

export default function CardItem({ id, name, type, status, timer }: IListData) {
    const dispatch = useDispatch();
    const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

    const handleSetActiveCard = () => {
        dispatch(setState({ value: id, keyValue: "onDragActiveCard" }));
        dispatch(setState({ value: type, keyValue: "onDragActiveType" }));
    };
    const handleUnsetActiveCard = () => {
        dispatch(setState({ value: "", keyValue: "onDragActiveCard" }));
        dispatch(setState({ value: "", keyValue: "onDragActiveType" }));
    };
    const handleOnClickCard = () => {
        dispatch(setStatus({ id: id, value: type }));
    };

    useEffect(() => {
        if (status !== "None") {
            timeoutRefs.current[id] = setTimeout(() => {
                dispatch(setStatus({ id: id, value: "None" }));
            }, 5000);
        } else if (timeoutRefs.current[id]) {
            clearTimeout(timeoutRefs.current[id]);
            delete timeoutRefs.current[id];
        }
    }, []);

    return (
        <article
            id={id}
            className="relative flex justify-between items-center min-h-[50px] border-solid shadow-md duration-300 hover:bg-slate-200 hover:duration-300 rounded p-2 m-2"
            draggable
            onDragStart={() => handleSetActiveCard()}
            onDragEnd={() => handleUnsetActiveCard()}
            onTouchStart={() => handleSetActiveCard()}
            onTouchEnd={() => handleUnsetActiveCard()}
            onClick={() => handleOnClickCard()}
        >
            <p className="text-xs md:text-sm">{name}</p>
        </article>
    );
}
