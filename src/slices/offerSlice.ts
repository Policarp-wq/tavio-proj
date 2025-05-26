import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOffer } from "../models/IOffer";
import { IOfferApi, offerApi, OfferApi } from "../models/IOfferApi";
import { Api } from "../models/Utils/Api";

export interface IOffersState{
    loaded: boolean,
    processing: boolean,
    offers: IOffer[]
}

export const initialState: IOffersState = {
    loaded: false,
    processing: false,
    offers: []
}

export const fetchOffers = createAsyncThunk(
    "offer/getOffers",
    async () =>{
        return offerApi.getOffers();
    }
)


export const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchOffers.pending, (state) =>{
            state.loaded = false;
            state.processing = true;
            state.offers = [];
        })
        builder.addCase(fetchOffers.rejected, (state, action) =>{
            state.loaded = false;
            state.processing = false;
            state.offers = [];
        })
        builder.addCase(fetchOffers.fulfilled, (state, action) => {
            state.loaded = true;
            state.processing = false;
            state.offers = action.payload;
        })
    },
    selectors: {
        selectUsersOffers: (state: IOffersState, userId: string) => state.offers.filter(o => o.ownerId === userId),
        selectOffers: (state: IOffersState) => state.offers,
        selectOfferById: (state: IOffersState, offerId: string) => state.offers.find(o => o.id === offerId)
    }
})


// export const {selectUsersOffers, selectOffers, selectOfferById} = offersSlice.selectors;
export default offersSlice.reducer;