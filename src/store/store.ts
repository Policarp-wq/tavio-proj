import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import offersReducer from "../slices/offerSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
        offers: offersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const getUserState = (state: RootState) => state.users;
export const getOffersState = (state: RootState) => state.offers;