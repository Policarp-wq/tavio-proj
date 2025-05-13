import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../models/IUser"
import { IOfferApi, OfferApi } from "../models/IOfferApi"
import { Api } from "../models/Utils/Api"
import { IOfferPreview } from "../models/IOffer"
import { ILogininfo } from "../models/ILoginInfo"
import { IRegisterInfo } from "../models/IRegisterInfo"

export interface IUserState{
    user?: IUser,
    offers: IOfferPreview[],
    requested: boolean,
    error?: string
    authed: boolean
}
const initialState: IUserState = {
    authed: false,
    requested: false,
    offers: []
}

const api: IOfferApi = new OfferApi(new Api(""))

export const loginUser = createAsyncThunk(
    "user/login",
    async (info: ILogininfo) =>{
        return api.loginUser(info);
    }
)

export const registerUser = createAsyncThunk(
    "user/register",
    async (info: IRegisterInfo) =>{
        return api.registerUser(info);
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // loginUser(state: IUserState, action: PayloadAction<IUser>) {
        //     state.authed = true;
        //     state.user = action.payload;
        // },
        unlogin(state: IUserState){
            state.authed = false;
            state.user = undefined;
        }
    },
    extraReducers: (builder) =>{
            builder.addCase(loginUser.pending, (state) =>{
                state.error = undefined;
                state.authed = false;
                state.requested = true;
                state.offers = [];
            })
            builder.addCase(loginUser.rejected, (state, action) =>{
                state.authed = false;
                state.requested = false;
                state.offers = [];
                state.error = action.error.message || "An unknown error occurred";
            })
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.authed = true;
                state.user = action.payload;
                state.offers = [];
                state.requested = false;
            }),
            builder.addCase(registerUser.pending, (state) => {
                state.error = undefined;
                state.requested = true;
            });
            builder.addCase(registerUser.rejected, (state, action) => {
                state.requested = false;
                state.error = action.error.message || "An unknown error occurred";
            });
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.authed = true;
                state.user = action.payload;
                state.requested = false;
            });
        },
    selectors: {
        selectUser: (state: IUserState) => state.user
    }
});
export const {unlogin} = userSlice.actions;
export const {selectUser} = userSlice.selectors;
export default userSlice.reducer;