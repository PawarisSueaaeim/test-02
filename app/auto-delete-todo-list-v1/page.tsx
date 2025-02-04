import React from "react";
import TodoV1 from "@/components/todo/TodoV1";

type Props = {};

const baseUrl = process.env.NEXT_PUBLIC_API;

export default async function AutoDeleteTodoListV1({}: Props) {
    const response = await fetch(`${baseUrl}/todo-list`);
    const listDatas = await response.json();

    return (
        <div>
            <TodoV1 datas={listDatas?.data} />
        </div>
    );
}
