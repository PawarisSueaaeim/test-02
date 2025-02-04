import React from "react";

type IHairColor = {
    [color: string]: number;
};

type IAddressUser = {
    [name: string]: string;
};

type IDepartmentData = {
    addressUser: IAddressUser[];
    ageRange: string;
    female: number;
    male: number;
    hair: IHairColor[];
};

type Props = {
    departments: {
        [department: string]: IDepartmentData;
    };
};

export default function Card({ departments }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(departments).map((department) => (
                <div
                    key={department}
                    className="bg-white shadow-md p-4 rounded-2xl border border-gray-200"
                >
                    <h2 className="text-2xl font-bold mb-2">{department}</h2>
                    <p className="text-gray-600 mb-1">
                        <strong>Age Range:</strong> {departments[department].ageRange}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <strong>Female:</strong> {departments[department].female}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <strong>Male:</strong> {departments[department].male}
                    </p>
                    <div className="mb-2">
                        <strong>Address Users:</strong>
                        <ul className="list-disc ml-5">
                            {(departments[department].addressUser.length > 0
                                ? departments[department].addressUser
                                : []
                            ).map((user, index) => {
                                const [name, address] = Object.entries(user)[0];
                                return (
                                    <li key={index}>
                                        {name}: {address}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <strong>Hair Colors:</strong>
                        <ul className="list-disc ml-5">
                            {(departments[department].hair.length > 0
                                ? departments[department].addressUser
                                : []
                            ).map((hairColor, index) => {
                                const [color, count] = Object.entries(hairColor)[0];
                                return (
                                    <li key={index}>
                                        {color}: {count}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
