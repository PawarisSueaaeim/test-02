'use client'
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
    Datas: [];
};

export default function TodoV1({ Datas }: Props) {
    console.log(Datas)
    return (
        <div>
            test
        </div>
    );
}
