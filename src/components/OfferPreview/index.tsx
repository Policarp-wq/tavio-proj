import { NO_IMAGE, STAR_FILLED } from "../../models/constants"
import { IOffer, IOfferPreview } from "../../models/IOffer"
import * as style from "../../styles/offer_preview/offer_preview.module.scss"

export type TOffersPreviewListProps = {
    offers: IOfferPreview[]
}

export const OffersPreviewList = ({offers}: TOffersPreviewListProps) =>{
    return (
        <ul className={style["offer-preview-list"]}>
            {offers.map(o => (<OfferPreview offer={o}/>))}
        </ul>
    );
}

export type TOfferPreviewProps = {
    offer: IOfferPreview
}

export const OfferPreview = ({offer} : TOfferPreviewProps) =>{
    const image = offer.images.length > 0 ? offer.images[0] : NO_IMAGE;
    return (
        <li className={style["offer-preview"]}>
            <img className={style["offer-preview__image"]} src={image}/>
            <div className={style["offer-preview__header"]}>
                <p>{offer.name}</p>
                <img src={STAR_FILLED}/>
            </div>
            <p className={style["offer-preview__price"]}>{offer.price}</p>
            <p className={style["offer-preview__address"]}>{offer.address}</p>
        </li>
    )
}