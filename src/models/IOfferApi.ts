import { Categories, Category } from "./Category";
import { ILogininfo } from "./ILoginInfo";
import { IOffer, IOfferRegisterInfo } from "./IOffer";
import { IRegisterInfo } from "./IRegisterInfo";
import { IUser } from "./IUser";
import { Api, IApi } from "./Utils/Api";

export type TError = string;

export interface IOfferApi {
    registerUser(info: IRegisterInfo): Promise<IUser>;
    loginUser(info: ILogininfo): Promise<IUser>;
    createOffer(info: IOfferRegisterInfo): Promise<boolean>;
    updateOffer(info: IOfferRegisterInfo, id: string): Promise<boolean>;
    getUser(userId: string): Promise<IUser>;
    getOffers(): Promise<IOffer[]>;
    getOffer(offerid: string): Promise<IOffer>;
    getUserOffers(userId: string): Promise<IOffer[]>;
}

export class OfferApi implements IOfferApi {
    constructor(private _client: IApi) {}
    async getUserOffers(userId: string): Promise<IOffer[]> {
        try {
            const response = await this._client.get(`/offers/user/${userId}`);
            return response as IOffer[];
        } catch {
            return await Promise.reject("Failed to get user offers");
        }
    }
    // Получение офера по id с запросом на сервер
    async getOffer(offerid: string): Promise<IOffer> {
        try {
            const response = await this._client.get(`/offers/${offerid}`);
            return response as IOffer;
        } catch {
            return await Promise.reject("Offer not found");
        }
    }

    // Получение пользователя по id с запросом на сервер
    async getUser(userId: string): Promise<IUser> {
        try {
            const response = await this._client.get(`/users/${userId}`);
            return response as IUser;
        } catch {
            return await Promise.reject("User not found");
        }
    }

    // Создание нового оффера с запросом на сервер
    async createOffer(info: IOfferRegisterInfo): Promise<boolean> {
        try {
            await this._client.post("/offers", info);
            return true;
        } catch {
            return await Promise.reject("Failed to create offer");
        }
    }

    async deleteOffer(id: string): Promise<boolean> {
        try {
            await this._client.delete(`/offers/${id}`);
            return true;
        } catch {
            return await Promise.reject("Failed to delete offer");
        }
    }

    // Обновление существующего оффера по id с запросом на сервер
    async updateOffer(info: IOfferRegisterInfo, id: string): Promise<boolean> {
        try {
            await this._client.put(`/offers/${id}`, info);
            return true;
        } catch {
            return await Promise.reject("Failed to update offer");
        }
    }

    // Регистрация нового пользователя с запросом на сервер
    async registerUser(info: IRegisterInfo): Promise<IUser> {
        try {
            const response = await this._client.post("/register", info);
            return response as IUser;
        } catch {
            return await Promise.reject("Failed to register user");
        }
    }

    // Получение списка всех офферов с запросом на сервер
    async getOffers(): Promise<IOffer[]> {
        try {
            const response = await this._client.get("/offers");
            return response as IOffer[];
        } catch {
            return await Promise.reject("Failed to get offers");
        }
    }

    // Логин пользователя с запросом на сервер
    async loginUser(info: ILogininfo): Promise<IUser> {
        try {
            const response = await this._client.post("/login", info);
            return response as IUser;
        } catch {
            return await Promise.reject("Invalid login credentials");
        }
    }
}

export const offerApi = new OfferApi(new Api("http://localhost:3000/api"))