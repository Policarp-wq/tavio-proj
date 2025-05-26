import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getUserState } from "../../store/store";
import { IOffer } from "../../models/IOffer";
import { IUser } from "../../models/IUser";
import { offerApi } from "../../models/IOfferApi";
import { getPreviewImage } from "../../models/Utils/utils";
import * as style from "../../styles/offer_page/offer_page.module.scss";
import clsx from "clsx";
import { SelectableList } from "../../components/SelectableList";
import { UserStats } from "../../components/UserStats";

export const OfferPage = () => {
    const { id } = useParams();
    const [offer, setOffer] = useState<IOffer | null>(null);
    const [offerUser, setOfferUser] = useState<IUser | null>(null);
    const [numberShown, setNumberShown] = useState(false);
    const [curImage, setImg] = useState<string | undefined>(undefined);
    const navigate = useNavigate();
    const currentUser = useSelector(getUserState);

    useEffect(() => {
        if (!id) return;
        offerApi.getOffer(id)
            .then(o => {
                setOffer(o);
                setImg(getPreviewImage(o.images));
                offerApi.getUser(o.ownerId).then(setOfferUser);
            })
            .catch((err) => alert(err));
    }, [id]);

    const showNumber = () => setNumberShown(prev => !prev);

    const handleImageSelected = (el: HTMLLIElement, ind: number, prev?: HTMLLIElement) => {
        el.classList.add(style["offer-page__stack-image_selected"]);
        if (prev) prev.classList.remove(style["offer-page__stack-image_selected"]);
        if (offer && ind >= 0 && ind < offer.images.length)
            setImg(offer.images[ind]);
    };

    const handleDelete = async () => {
        if (!offer) return;
        if (!window.confirm("Вы уверены, что хотите удалить объявление?")) return;
        try {
            await offerApi.deleteOffer(offer.id);
            navigate("/");
        } catch (e) {
            alert("Ошибка при удалении");
        }
    };

    const handleBuy = () =>{
        navigate(`/offer-buy/${id}`);
    };

    if (!offer) return <h1>HUY</h1>;

    return (
        <div className={style["offer-page"]}>
            <div className={style["offer-page__content"]}>
                <h2 className={style["offer-page__title"]}>{offer.name}</h2>
                <h3 className={style["offer-page__price"]}>{offer.price + "₽"}</h3>
                <img className={style["offer-page__offer-image"]} src={curImage} alt="offer-image" />
                <div className={style["offer-page__stats"]}>
                    {offerUser && <UserStats user={offerUser} />}
                </div>
                {currentUser.authed && offer.ownerId === currentUser.user?.id ? (
                    <div className={style["offer-page__buttons"]}>
                        <button className={clsx(style["button_neutral"], style["button"])} onClick={() => navigate(`/offer-edit/${offer.id}`)}>Редактировать</button>
                        <button className={clsx(style["button_negative"], style["button"])} onClick={handleDelete}>Удалить</button>
                    </div>
                ) : (
                    <div className={style["offer-page__buttons"]}>
                        <button className={clsx(style["button_neutral"], style["button"])} onClick={showNumber}>
                            {numberShown ? offerUser?.phone : "Показать телефон"}
                        </button>
                        <button className={clsx(style["button_positive"], style["button"])} onClick={handleBuy}>Купить</button>
                    </div>
                )}
                <SelectableList onItemSelected={handleImageSelected} selectFirst={true} className={style["offer-page__stack"]}>
                    {offer.images.map((i, ind) =>
                        <img className={clsx(style["offer-page__stack-image"], style["selected"])} src={i} alt="offer-img" key={ind} />
                    )}
                </SelectableList>
                <p className={style["offer-page__description"]}>{offer.description}</p>
            </div>
        </div>
    );
};