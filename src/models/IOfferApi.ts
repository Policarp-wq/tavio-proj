import { OffersPreviewList } from "../components/OfferPreview";
import { Category } from "./Category";
import { mockOfferPreviews, mockOffers, User } from "./constants";
import { ILogininfo } from "./ILoginInfo";
import { IOffer, IOfferPreview, IOfferRegisterInfo } from "./IOffer";
import { IRegisterInfo } from "./IRegisterInfo";
import { IUser } from "./IUser";
import { Offers, Users } from "./MockDb";
import { IApi } from "./Utils/Api";

export type TError = string;
// export type Response<T> = Promise<T | TError>; 

export interface IOfferApi{
    // getAllOffers() : IOffer[];
    // getUserOffers(userId: string): IOffer[];
    // getBySearchString(query: string): IOffer[];
    // getByCategory(query: Category): IOffer[];

    registerUser(info: IRegisterInfo): Promise<IUser>;
    loginUser(info: ILogininfo): Promise<IUser>;
    //getUsersOffers(userId: string): Promise<IOfferPreview[]>;

    // createOffer(info: IOfferRegisterInfo): boolean;
    // updteOffer(info: IOfferRegisterInfo): boolean;
    getOffers(): Promise<IOffer[]>
}

export class OfferApi implements IOfferApi{
    constructor(private _client: IApi) {
        
    }
    registerUser(info: IRegisterInfo): Promise<IUser> {
        const registredUser = {...info, rating: 0, registerDate: new Date(), id: (Users[Users.length - 1].id + "2"), iconUrl: ""};
        alert(registredUser.id)
        Users.push(registredUser);
        return Promise.resolve(Users[-1]);
    }
    getOffers(): Promise<IOffer[]> {
        return Promise.resolve(Offers);
    }
    loginUser(info: ILogininfo): Promise<IUser> {
        const res = Users.filter(u => u.login === info.login);
        if(res.length == 0)
            return Promise.reject("No user with this login info");
        return Promise.resolve(res[0]);
    }
    // getUsersOffers(userId: string): Promise<IOfferPreview[]> {
    //     return Promise.resolve(this._offers);
    // }
}