import React from 'react'
import { IListData } from './TodoV1'
import CardItem from './CardItem'

type Props = {
    title: string,
    listDatas: IListData[],
    type: "Fruit" | "Vegetable" | "None",
}

export default function Column({title, listDatas, type}: Props) {
  return (
    <div className='flex flex-col bg-white rounded-lg shadow-xl p-2'>
        <div className='font-semibold text-sm md:text-lg m-2'>{title}</div>
        {listDatas?.map((item) => {
            if (type === "None" && item.status === "None" ) {
                return (
                    <div key={item.id}>
                        <CardItem
                            id={item.id}
                            name={item.name}
                            type={item.type}
                        />
                    </div>
                )
            }
            if (type === "Fruit" && item.status === "Fruit" ) {
                return (
                    <div key={item.id}>
                        <CardItem
                            id={item.id}
                            name={item.name}
                            type={item.type}
                        />
                    </div>
                )
            }
            if (type === "Vegetable" && item.status === "Vegetable" ) {
                return (
                    <div key={item.id}>
                        <CardItem
                            id={item.id}
                            name={item.name}
                            type={item.type}
                        />
                    </div>
                )
            }
        })}
    </div>
  )
}