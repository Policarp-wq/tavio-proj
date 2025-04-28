import { OffersPreviewList } from "../components/OfferPreview";
import { Category } from "./Category";
import { mockOfferPreviews, mockOffers } from "./constants";
import { ILogininfo } from "./ILoginInfo";
import { IOffer, IOfferPreview, IOfferRegisterInfo } from "./IOffer";
import { IRegisterInfo } from "./IRegisterInfo";
import { IUser } from "./IUser";
import { IApi } from "./Utils/Api";

export type TError = string;
export type Response<T> = T | TError; 

export interface IOfferApi{
    // getAllOffers() : IOffer[];
    // getUserOffers(userId: string): IOffer[];
    // getBySearchString(query: string): IOffer[];
    // getByCategory(query: Category): IOffer[];

    // registerUser(info: IRegisterInfo): IUser;
    // loginUser(info: ILogininfo): IUser | null;
    //getUsersOffers(userId: string): Promise<IOfferPreview[]>;

    // createOffer(info: IOfferRegisterInfo): boolean;
    // updteOffer(info: IOfferRegisterInfo): boolean;
    getOffers(): Promise<IOffer[]>
}

export class OfferApi implements IOfferApi{
    constructor(private _client: IApi,
         private _offers: IOffer[] = mockOffers) {
        
    }
    getOffers(): Promise<IOffer[]> {
        return Promise.resolve(this._offers);
    }
    // getUsersOffers(userId: string): Promise<IOfferPreview[]> {
    //     return Promise.resolve(this._offers);
    // }
}