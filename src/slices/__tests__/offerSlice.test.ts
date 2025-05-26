import { IOffer } from "../../models/IOffer";
import { fetchOffers, initialState } from "../offerSlice"
import offerReducer from '../offerSlice';

describe('Offer slice request test', () => {
    test('On request pending loading property is true', () => {
        const state =  offerReducer(initialState, fetchOffers.pending(''));

        expect(state.loaded).toBeFalsy();
        expect(state.processing).toBeTruthy();
    })
    test('On request fullfield data is loaded', () => {
        const mockOffers: IOffer[] = [
        {
            id: "1",
            name: "Велосипед",
            price: 12000,
            ownerId: "u1",
            images: ["https://via.placeholder.com/300x200?text=Bike"],
            description: "Горный велосипед в отличном состоянии.",
            category: "Sport" as any,
            address: "Москва, ул. Ленина, 1",
            publishDate: new Date("2024-01-01")
        },
        {
            id: "2",
            name: "Ноутбук",
            price: 45000,
            ownerId: "u2",
            images: ["https://via.placeholder.com/300x200?text=Laptop"],
            description: "Мощный ноутбук для работы и игр.",
            category: "Electronics" as any,
            address: "Санкт-Петербург, Невский пр., 10",
            publishDate: new Date("2024-01-02")
        }
    ];
        const state =  offerReducer(initialState, fetchOffers.fulfilled(mockOffers, ''));
        
        expect(state.loaded).toBeTruthy();
        expect(state.processing).toBeFalsy();

        expect(state.offers).toHaveLength(mockOffers.length);
        expect(state.offers).toEqual(mockOffers);
    })
})