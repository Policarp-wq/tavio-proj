import { useDispatch } from "react-redux"

import * as style from "../../styles/hub_page/hub_page.module.scss"
import { AsideMenu } from "../../components/AsideMenu"
import { OffersPreviewList } from "../../components/OfferPreview"
import { UserOffers } from "../../components/UserOffers"
import { useEffect } from "react"
import { fetchOffers } from "../../slices/offerSlice"
import { AppDispatch } from "../../store/store"

export type THubPageProps = {
    query: string
}

export const HubPage = ({query} : THubPageProps) =>{
    return (
        <div className={style["hub-page"]}>
            <AsideMenu></AsideMenu>
            <div>
                <h2 className={style["hub-page__title"]}>Список товаров</h2>
                <OffersPreviewList filter={query}/>
            </div>
            <UserOffers/>
        </div>
        
    )
    
}