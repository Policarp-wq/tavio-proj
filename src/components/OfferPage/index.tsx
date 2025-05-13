import { userInfo } from "os";
import { mockOffers, User } from "../../models/constants";
import { IOffer } from "../../models/IOffer"
import { UserStats } from "../UserStats";
import { getPreviewImage } from "../../models/Utils/utils";
import * as style from "../../styles/offer_page/offer_page.module.scss"
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getUserState, RootState } from "../../store/store";
import { SelectableList } from "../SelectableList";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { selectOfferById } from "../../slices/offerSlice";
import { IUser } from "../../models/IUser";
import { selectUser } from "../../slices/userSlice";
import { OfferApi } from "../../models/IOfferApi";
import { Api } from "../../models/Utils/Api";

export const OfferPage = () => {
    const {id} = useParams();
    const offer = useSelector<RootState, IOffer | undefined>((state) => selectOfferById(state, id ? id : "-1"));
    const [offerUser, setOfferUser] = useState<IUser | null>(null);
    if(!offer)
        return <Navigate to="/"/>
    const currentUser = useSelector(getUserState);
    useEffect(() => {
        const offerApi = new OfferApi(new Api(""));
        offerApi.getUser(offer.ownerId).then(res => setOfferUser(res))
    }, [offer])

    const handleImageSelected = (el: HTMLLIElement, ind: number, prev?: HTMLLIElement) => {
        el.classList.add(style["offer-page__stack-image_selected"]);
        console.log(el.innerHTML);
        if(prev){
            console.log(prev.innerHTML);
            prev.classList.remove(style["offer-page__stack-image_selected"]);
        }
        if(ind >= 0 && ind < offer.images.length)
            setImg(offer.images[ind])
    }
    const [curImage, setImg] = useState(getPreviewImage(offer.images));
    return (
        <div className={style["offer-page"]}>
            <div className={style["offer-page__content"]}>
                    <h2 className={style["offer-page__title"]}>{offer.name}</h2>
                    <h3 className={style["offer-page__price"]}>{offer.price + "₽"}</h3>
                
                <img className={style["offer-page__offer-image"]} src={curImage} alt="offer-image"/>
                <div className={style["offer-page__stats"]}>
                    {offerUser && <UserStats user={offerUser}/>}
                </div>
                {currentUser.authed && offer.ownerId === currentUser.user?.id? ( <div className={style["offer-page__buttons"]}>
                        <button className={clsx(style["button_neutral"], style["button"])}>Редактировать</button>
                        <button className={clsx(style["button_negative"], style["button"])}>Удалить</button>
                </div>) :
                ( <div className={style["offer-page__buttons"]}>
                        <button className={clsx(style["button_neutral"], style["button"])}>Показать телефон</button>
                        <button className={clsx(style["button_positive"], style["button"])}>Купить</button>
                </div>)}
            <SelectableList onItemSelected={handleImageSelected} selectFirst={true} className={style["offer-page__stack"]}>
                {offer.images.map((i, ind) =>
                <img className={clsx(style["offer-page__stack-image"], style["selected"])} src={i} alt="offer-img"/>
            )}
            </SelectableList>
            <p className={style["offer-page__description"]}>{offer.description}</p>
            </div>
            
        </div>
    )
}