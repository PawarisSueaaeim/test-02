"use client";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
    type: string;
};

export default function DropArea({ type }: Props) {
    const dispatch = useDispatch();

    const handleOnDrop = () => {
        console.log(type);
    };

    return (
        <section
            className="opacity-50 duration-300 border border-dashed border-darkgray_primary rounded-sm p-1 text-[10px]"
            onDrop={() => handleOnDrop()}
            onDragOver={(event) => event.preventDefault()}
        >
            Drop here
        </section>
    );
}
