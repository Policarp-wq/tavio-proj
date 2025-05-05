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

export const Main = () =>{
    
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch])
    return(
        <OfferPage/>
        // <main className={style.main}>
        //     <AsideMenu></AsideMenu>
        //     <div>
        //         <h2 className={style.main__title}>Может заинтересовать</h2>
        //         <OffersPreviewList offers={mockOfferPreviews}/>
        //     </div>
        //     <UserOffers/>
        // </main>
    )
}