"use client";
import { setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootStore } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

type Props = {
    type: string;
};

export default function DropArea({ type }: Props) {
    const dispatch = useDispatch();

    const { onDragActiveCard, onDragActiveType } = useSelector(
        (state: RootStore) => state.autoDeleteTodoListSlice
    );

    const handleOnDrop = () => {
        if (type === onDragActiveType) {
            dispatch(setStatus({ id: onDragActiveCard, value: type }));
        } else if (type !== onDragActiveType) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Type is not ${type}`,
                timer: 1500,
                confirmButtonText: "OK",
            });
        } else {
            return;
        }
    };

    return (
        <section
            className="opacity-70 duration-300 border border-dashed border-darkgray_primary rounded-sm p-1 text-[10px]"
            onDrop={() => handleOnDrop()}
            onDragOver={(event) => event.preventDefault()}
        >
            Drop here
        </section>
    );
}
