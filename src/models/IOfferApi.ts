import { Category } from "./Category";
import { ILogininfo } from "./ILoginInfo";
import { IOffer, IOfferRegisterInfo } from "./IOffer";
import { IRegisterInfo } from "./IRegisterInfo";
import { IUser } from "./IUser";

export type TError = string;
export type Response<T> = T | TError; 

export interface IOfferApi{
    getAllOffers() : IOffer[];
    getUserOffers(userId: string): IOffer[];
    getBySearchString(query: string): IOffer[];
    getByCategory(query: Category): IOffer[];

    registerUser(info: IRegisterInfo): IUser;
    loginUser(info: ILogininfo): IUser | null;

    createOffer(info: IOfferRegisterInfo): boolean;
    updteOffer(info: IOfferRegisterInfo): boolean;
}