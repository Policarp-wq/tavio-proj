import { NO_IMAGE, STAR_FILLED } from "../../models/constants"
import { IOffer, IOfferPreview } from "../../models/IOffer"
import * as style from "../../styles/offer_preview/offer_preview.module.scss"
import emptyStar from '../../assets/images/star-empty.svg';
import filledStar from '../../assets/images/star-filled.svg';
import { filterOffers, getPreviewImage, toOfferPreview } from "../../models/Utils/utils";
import { JSX, useEffect, useLayoutEffect } from "react";
import { OfferApi } from "../../models/IOfferApi";
import { Api } from "../../models/Utils/Api";

export type TOffersPreviewListProps = {
    filter?: string
}

import { useState } from "react";

export const OffersPreviewList = ({ filter = "" }: TOffersPreviewListProps) => {
    const [searchResult, setSearchResult] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const api = new OfferApi(new Api(""));
        api.getOffers().then(offers => {
            const previews = offers.map(o => toOfferPreview(o, false));
            setSearchResult(filterOffers(previews, filter).map((o, index) => (<OfferPreview key={index} index={index} offer={o} />)));
        });
    }, [filter]);

    return (
        <ul className={style["offer-preview-list"]}>
            {searchResult.length > 0 ? searchResult : <h1>Ничего не найдено(</h1>}
        </ul>
    );
}

export type TOfferPreviewProps = {
    offer: IOfferPreview,
    index: number
}

export const OfferPreview = ({offer, index} : TOfferPreviewProps) =>{
    const image = getPreviewImage(offer.images);
    return (
        <li key={index} className={style["offer-preview"]}>
            <img className={style["offer-preview__image"]} src={image}/>
            <div className={style["offer-preview__description"]}>
            <div className={style["offer-preview__header"]}>
                <p>{offer.name}</p>
                <img src={offer.liked? filledStar: emptyStar}/>
            </div>
            <p className={style["offer-preview__price"]}>{offer.price}</p>
            <p className={style["offer-preview__address"]}>{offer.address}</p>
            </div>
        </li>
    )
}