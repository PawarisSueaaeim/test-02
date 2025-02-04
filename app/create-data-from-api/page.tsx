import CreateData from "@/components/create/CreateData";
import React from "react";

type Props = {};

export default async function CreateDataFromApi({}: Props) {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return <div><CreateData datas={data.users}/></div>;
}
