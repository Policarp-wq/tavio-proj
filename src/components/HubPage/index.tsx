import { useDispatch } from "react-redux"

import * as style from "../../styles/hub_page/hub_page.module.scss"
import { AsideMenu } from "../AsideMenu"
import { OffersPreviewList } from "../OfferPreview"
import { UserOffers } from "../UserOffers"
import { useEffect } from "react"
import { fetchOffers } from "../../slices/offerSlice"
import { AppDispatch } from "../../store/store"

export type THubPageProps = {
    query: string
}

export const HubPage = ({query} : THubPageProps) =>{
    const dispatch = useDispatch<AppDispatch>();
        useEffect(() => {
            dispatch(fetchOffers());
        }, [dispatch])
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