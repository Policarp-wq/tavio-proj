import { Category } from "./Category";
import { IUser } from "./IUser";

export interface IOffer{
    id: string,
    name: string,
    price: number,
    owner: IUser,
    images: string[],
    description: string,
    category: Category
}

export interface IOfferRegisterInfo{
    name: string,
    price: number,
    ownerId: string,
    images: string[],
    description: string,
    category: Category
}