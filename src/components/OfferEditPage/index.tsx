import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IOffer } from "../../models/IOffer"
import { useSelector } from "react-redux";
import { getUserState } from "../../store/store";

import * as style from "../../styles/offer-edit/offer-edit.module.scss"

import camera from "../../assets/images/camera-icon.png"
import { off } from "process";
import clsx from "clsx";

export type TOfferEditPageProps = {
    init?: IOffer
}

export const OfferEditPage = ({init} : TOfferEditPageProps) =>{
    const isEdit = init;
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const user = useSelector(getUserState);
     const [offer, setOffer] = useState({
        name: init?.name ?? "",
        price: init?.price ?? "",
        description: init?.description ?? "",
        images: init?.images ?? ["https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",
      "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png",],
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setOffer(prev => ({...prev, [name]: value}))
    }
    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setOffer(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    const handleCameraClick = () =>{
        fileInputRef.current?.click();
    }
    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const newImages = Array.from(files).map(file => URL.createObjectURL(file));
        setOffer(prev => ({
            ...prev,
            images: [...prev.images, ...newImages]
        }));
    }
    return (
        <form className={style["offer-edit"]} onSubmit={handleSubmit}>
            <h1 className={style["offer-edit__title"]}>{isEdit ? "Редактировать" : "Создать" + " объявление"}</h1>
            <label>
                Название
                <input className={style["offer-edit__input"]} onInput={handleInputChange} type="text" name="name" value={offer.name}/>
            </label>
            <label>
                Цена
                <input type="text" className={style["offer-edit__input"]} name="price" onInput={handleInputChange} value={offer.price}/>
            </label>
            <label>
                Описание
                <textarea cols={30} rows={3} onChange={handleDescriptionChange} className={style["offer-edit__input"]} name="description" value={offer.description}/>
            </label>
            <ul className={style["offer-edit__img-stack"]}>
                <li>
                    <button
                    type="button"
                    onClick={handleCameraClick}
                    className={clsx(style["offer-edit__camera-btn"], style["offer-edit__img"])}
                >
                    <img src={camera} alt="Добавить фото" />
                </button>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={addPhoto}
                />
                </li>
                {offer.images.map((item, ind) => <li key={ind}><img className={style["offer-edit__img"]} src={item} alt="offer-image"/></li>)}
            </ul>
            <button className={style["offer-edit__confirm-button"]} type="submit">{isEdit ? "Редактировать" : "Создать"}</button>
        </form>
    )
}