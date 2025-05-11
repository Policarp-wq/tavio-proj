import { NO_IMAGE, STAR_FILLED } from "../../models/constants"
import { IOffer, IOfferPreview } from "../../models/IOffer"
import * as style from "../../styles/offer_preview/offer_preview.module.scss"
import emptyStar from '../../assets/images/star-empty.svg';
import filledStar from '../../assets/images/star-filled.svg';
import { filterOffers, getPreviewImage } from "../../models/Utils/utils";

export type TOffersPreviewListProps = {
    offers: IOfferPreview[],
    filter?: string
}

export const OffersPreviewList = ({offers, filter=""}: TOffersPreviewListProps) =>{
    const searchResult = filterOffers(offers, filter).map((o, index) => (<OfferPreview index={index} offer={o}/>));
    return (
        <ul className={style["offer-preview-list"]}>
            { searchResult.length > 0 ? searchResult : <h1>Ничего не найдено(</h1> }
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