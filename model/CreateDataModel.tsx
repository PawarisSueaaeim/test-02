import { IData } from "@/components/create/CreateData";

export const processCreateDatas = (datas: IData[]) => {
    return datas.reduce((acc, user) => {
    const { department } = user.company;

        if (!acc[department]) {
            acc[department] = {
                male: 0,
                female: 0,
                ageRange: "",
                hair: [],
                addressUser: [],
            };
        }

        // Count gender
        acc[department][user.gender] += 1;

        // Track age range
        if (!acc[department].ageRange) {
            acc[department].ageRange = `${user.age}-${user.age}`;
        } else {
            const [minAge, maxAge] = acc[department].ageRange.split("-").map(Number);
            acc[department].ageRange = `${Math.min(minAge, user.age)}-${Math.max(
                maxAge,
                user.age
            )}`;
        }

        // Count hair colors
        const hairColor = user.hair.color;
        acc[department].hair[hairColor] = (acc[department].hair[hairColor] || 0) + 1;

        // Store address
        const fullName = `${user.firstName}${user.lastName}`;
        acc[department].addressUser[fullName] = user.address.postalCode;

        return acc;
    }, {});
};
