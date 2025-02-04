import React from "react";
import { baseUrl } from "../layout";
import TodoV1 from "@/components/todo/TodoV1";

type Props = {};

export default async function AutoDeleteTodoListV1({}: Props) {
    const response = await fetch(`${baseUrl}/todo-list`);
    const listDatas = await response.json();

    return (
        <div>
            <TodoV1 Datas={listDatas.data} />
        </div>
    );
}
