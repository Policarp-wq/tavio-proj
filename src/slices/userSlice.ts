import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../models/IUser"

export interface IUserState{
    user?: IUser,
    authed: boolean
}
const initialState: IUserState = {
    authed: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state: IUserState, action: PayloadAction<IUser>) {
            state.authed = true;
            state.user = action.payload;
        },
        unlogin(state: IUserState){
            state.authed = false;
            state.user = undefined;
        }
    },
    selectors: {
        selectUser: (state: IUserState) => state.user
    }
});
export const {loginUser, unlogin} = userSlice.actions;
export const {selectUser} = userSlice.selectors;
export default userSlice.reducer;