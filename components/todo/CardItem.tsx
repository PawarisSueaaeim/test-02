import React from "react";

type Props = {
    id: string;
    name: string;
    type: "Fruit" | "Vegetable" | "None";
};

export default function CardItem({ id, name, type }: Props) {

    const handleSetActiveCard = () => {
        console.log(id, name, type);
    };
    const handleUnsetActiveCard = () => {
        console.log(id, name, type);
    };
    const handleOnClickCard = () => {
        console.log(id, name, type);
    };
    
    return (
        <article
            id={id}
            className="relative flex justify-between items-center min-h-[50px] border-solid shadow-md duration-300 hover:bg-white_primary hover:duration-300 rounded p-2 m-2"
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
