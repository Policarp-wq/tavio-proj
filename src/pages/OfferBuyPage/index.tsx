import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/store";
import { offerApi } from "../../models/IOfferApi";
import { IOffer } from "../../models/IOffer";
import { IUser } from "../../models/IUser";
import * as style from "../../styles/offer-edit/offer-edit.module.scss";

export const OfferBuyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentUser = useSelector(getUserState);

    const [offer, setOffer] = useState<IOffer | null>(null);
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [phone, setPhone] = useState(currentUser.user?.phone || "");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (!id) return;
        offerApi.getOffer(id)
            .then(setOffer)
            .catch(() => navigate("/"));
    }, [id]);

    useEffect(() => {
        setIsFormValid(
            address.trim().length > 0 &&
            phone.trim().length > 0 &&
            !isNaN(Number(phone))
        );
    }, [address, phone]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || !offer) return;
        offerApi.deleteOffer(offer.id).then(() =>{
        alert(
            `Покупка совершена!\nТовар: ${offer.name}\nПокупатель: ${currentUser.user?.name}\nТелефон: ${phone}\nАдрес: ${address}\nКомментарий: ${comment}`
            );
        navigate("/");
        }).catch(err => alert("Ошибка покупки!"))
        
    };

    if (!offer) return <h1>Загрузка...</h1>;

    return (
        <form className={style["offer-edit"]} onSubmit={handleSubmit}>
            <h1 className={style["offer-edit__title"]}>Оформление заказа</h1>
            <div>
                <strong>Товар:</strong> {offer.name}
            </div>
            <div>
                <strong>Цена:</strong> {offer.price} ₽
            </div>
            <div>
                <strong>Покупатель:</strong> {currentUser.user?.name}
            </div>
            <label>
                Телефон для связи
                <input
                    className={style["offer-edit__input"]}
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Ваш телефон"
                />
            </label>
            <label>
                Адрес доставки
                <input
                    className={style["offer-edit__input"]}
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Адрес доставки"
                />
            </label>
            <label>
                Комментарий к заказу
                <textarea
                    className={style["offer-edit__input"]}
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Комментарий (необязательно)"
                />
            </label>
            <button
                className={style["offer-edit__confirm-button"]}
                type="submit"
                disabled={!isFormValid}
            >
                Купить
            </button>
        </form>
    );
};