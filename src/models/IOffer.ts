import { Category } from "./Category";
import { IUser } from "./IUser";

export interface IOffer{
    id: string,
    name: string,
    price: number,
    ownerId: string,
    images: string[],
    description: string,
    category: Category,
    address: string,
    publishDate: Date
}

export interface IOfferPreview{
    id: string
    name: string,
    price: number,
    images: string[],
    description: string,
    category: Category,
    address: string,
}

export interface IOfferRegisterInfo{
    name: string,
    price: number,
    ownerId: string,
    images: string[],
    description: string,
    category: Category
}