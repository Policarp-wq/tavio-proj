import { MenuElement } from "../../models/Types/types"
import { AsideMenu } from "../AsideMenu"

import * as style from "../../styles/main/main.module.scss"
import { Categories, Category } from "../../models/Category"
import { OffersPreviewList } from "../OfferPreview"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { AppDispatch, RootState } from "../../store/store"
import { IOffer } from "../../models/IOffer"
import { UserOffers } from "../UserOffers"
import { OfferPage } from "../../pages/OfferPage"
import { HubPage } from "../../pages/HubPage"
import { UserForm } from "../../pages/AuthPage"
import { OfferEditPage } from "../../pages/OfferEditPage"
import { Route, Routes } from "react-router-dom"
import { ProtectedElement } from "../ProtectedElement"
import { OfferBuyPage } from "../../pages/OfferBuyPage"
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
                <Route path="/offer/:id" element={<OfferPage/>}/>
                <Route path="/offer-edit/:id" element={<ProtectedElement><OfferEditPage/></ProtectedElement> }/>
                <Route path="/offer-edit/" element={<ProtectedElement><OfferEditPage/></ProtectedElement> }/>
                <Route path="/offer-buy/:id" element={<ProtectedElement><OfferBuyPage/></ProtectedElement> }/>
                <Route path="/*" element={<h1>Not found</h1>}/>
            </Routes>
        </main>
    )
}