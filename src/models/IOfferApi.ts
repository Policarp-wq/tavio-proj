import { OffersPreviewList } from "../components/OfferPreview";
import { Category } from "./Category";
import { User } from "./constants";
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

    createOffer(info: IOfferRegisterInfo): Promise<boolean>;
    updteOffer(info: IOfferRegisterInfo): Promise<boolean>;
    getUser(userId: string): Promise<IUser>;
    getOffers(): Promise<IOffer[]>
}

export class OfferApi implements IOfferApi{
    constructor(private _client: IApi) {
        
    }
    getUser(userId: string): Promise<IUser> {
        const user = Users.filter(u => u.id === userId);
        if(user.length == 0)
            return Promise.reject("Not found")
        return Promise.resolve(user[0]);
    }
    createOffer(info: IOfferRegisterInfo): Promise<boolean> {
        Offers.push({
            ...info,
            id: `o${Offers.length + 1}`,
            address: "Не указан",
            publishDate: new Date(),
        });
        return Promise.resolve(true);
    }
    updteOffer(info: IOfferRegisterInfo): Promise<boolean> {
        const idx = Offers.findIndex(o => o.id === (info as any).id);
        if (idx === -1) return Promise.resolve(false);
        Offers[idx] = {
            ...Offers[idx],
            ...info,
        };
        return Promise.resolve(true);
    }
    registerUser(info: IRegisterInfo): Promise<IUser> {
        const registredUser = {...info, rating: 0, registerDate: new Date(), id: (Users[Users.length - 1].id + "2"), iconUrl: ""};
        // alert(registredUser.id)
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