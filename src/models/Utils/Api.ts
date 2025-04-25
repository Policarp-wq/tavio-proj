export interface IApi{
    get(path: string) : Promise<object>;
    post(path: string, body: object) : Promise<object>;
    put(path: string, body: object) : Promise<object>;
    delete(path: string) : Promise<object>;
}

export type TApiMethods = "GET" | "POST" | "PUT" | "DELETE";

export class Api implements IApi{
    protected _options: RequestInit;
    constructor(public baseUrl: string){
        this._options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
    protected handleResponse(response: Response): Promise<object> {
        if (response.ok) return response.json();
        else return response.json()
            .then(data => Promise.reject(data.error ?? response.statusText));
    }
    get(path: string) : Promise<object>{
        return fetch(this.baseUrl + path, {
            ...this._options,
            method: "GET"
        }).then(this.handleResponse);
    }
    post(path: string, body: object) : Promise<object>{
        return fetch(this.baseUrl + path, {
            ...this._options,
            method: "POST",
            body: JSON.stringify(body)
        }).then(this.handleResponse);
    }
    put(path: string, body: object) : Promise<object>{
        return fetch(this.baseUrl + path, {
            ...this._options,
            method: "PUT",
            body: JSON.stringify(body)
        }).then(this.handleResponse);
    }
    delete(path: string) : Promise<object>{
        return fetch(this.baseUrl + path, {
            ...this._options,
            method: "DELETE",
        }).then(this.handleResponse);
    }
}