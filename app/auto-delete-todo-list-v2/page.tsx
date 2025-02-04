import React from "react";
import { baseUrl } from "../layout";
import TodoV2 from "@/components/todo/TodoV2";

type Props = {};

export default async function AutoDeleteTodoListV2({}: Props) {
    const response = await fetch(`${baseUrl}/todo-list`);
    const listDatas = await response.json();

    return (
        <div>
            <TodoV2 datas={listDatas.data} />
        </div>
    );
}
