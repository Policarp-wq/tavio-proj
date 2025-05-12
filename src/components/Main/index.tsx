import { MenuElement } from "../../models/Types/types"
import { AsideMenu } from "../AsideMenu"

import * as style from "../../styles/main/main.module.scss"
import { Categories, Category } from "../../models/Category"
import { OffersPreviewList } from "../OfferPreview"
import { mockOfferPreviews } from "../../models/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchOffers, selectUsersOffers } from "../../slices/offerSlice"
import { AppDispatch, RootState } from "../../store/store"
import { IOffer } from "../../models/IOffer"
import { UserOffers } from "../UserOffers"
import { OfferPage } from "../OfferPage"
import { HubPage } from "../HubPage"
import { UserForm } from "../UserForm"
import { OfferEditPage } from "../OfferEditPage"
import { Route, Routes } from "react-router-dom"
import { ProtectedElement } from "../ProtectedElement"
export type TMainProps = {
    query: string;
}

export const Main = ({query}: TMainProps) =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<HubPage query={query}/>}/>
                <Route path="/register" element={<UserForm state="Register"/>}/>
                <Route path="/login" element={<UserForm state="Auth"/>}/>
                <Route path="/offer-edit" element={<ProtectedElement><OfferEditPage/></ProtectedElement> }/>

            </Routes>
            {/* <HubPage query={query}/> */}
            {/* <UserForm state="Register"/> */}
            {/* <OfferEditPage/> */}
        </main>
    )
}