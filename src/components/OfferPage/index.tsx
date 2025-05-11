import { userInfo } from "os";
import { mockOffers, User } from "../../models/constants";
import { IOffer } from "../../models/IOffer"
import { UserStats } from "../UserStats";
import { getPreviewImage } from "../../models/Utils/utils";
import * as style from "../../styles/offer_page/offer_page.module.scss"
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/store";
import { SelectableList } from "../SelectableList";
import { useState } from "react";

export const OfferPage = () => {
    const offer = mockOffers[0];
    const userState = useSelector(getUserState);
    const currentUser = userState.authed ? userState.user! : User;

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
                    <UserStats user={currentUser}/>
                </div>
                {offer.ownerId === currentUser.id ? ( <div className={style["offer-page__buttons"]}>
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