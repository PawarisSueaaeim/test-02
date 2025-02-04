import { IListData } from "@/components/todo/TodoV1";

export const processListDatas = (datas: IListData[]) => {
    return datas.map((item,index) => {
        return {
            ...item,
            id: `${index+1}-${item.name}`,
            status: "None" as "Fruit" | "Vegetable" | "None",
        }
    });
};