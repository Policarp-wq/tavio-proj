import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, getUserState, RootState } from "../../store/store"
import { IOffer } from "../../models/IOffer"
import * as style from "../../styles/user_offers/user-offers.module.scss"
import { useEffect } from "react"
import { fetchOffers, selectUsersOffers } from "../../slices/offerSlice"
import { getFormattedDate, getPreviewImage } from "../../models/Utils/utils"

export type TUserOffersProps = {
    // offers: IOffer[]
}

export const UserOffers = ({} : TUserOffersProps) =>{
    const user = useSelector(getUserState);
    const offers = useSelector<RootState, IOffer[]>((state) => selectUsersOffers(state, "2"));
    return (
        <div className={style["user-offers-area"]}>
            <h3 className={style["user-offers-area__title"]}>Мои объявления</h3>
            {user.authed ? 
            <ul className={style["user-offers-list"]}>
                {offers.map((val, ind) => <UserOffer offer={val} key={ind}/>)}
            </ul>
                
            :
            <h2>Необходимо авторизоваться</h2>
            }
        </div>
    )
}
export type TUserOfferProps = {
    offer: IOffer,
    key: number
};
export const UserOffer = ({offer, key} : TUserOfferProps) =>{
    const image = getPreviewImage(offer.images);
    return (
        <li className={style["user-offer"]} key={key}>
            <img src={image} alt="offer_iamge" className={style["user-offer__image"]}/>
            <div className={style["user-offer__description"]}>
                <h3 className={style["user-offer__name"]}>{offer.name}</h3>
                <p className={style["user-offer__price"]}>{offer.price}</p>
                <p className={style["user-offer__date"]}>{"Опубликовано:\n" + getFormattedDate(offer.publishDate)}</p>
            </div>
        </li>
    )
}