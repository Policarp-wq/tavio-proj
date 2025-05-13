import { NO_IMAGE } from "../constants";
import { IOffer, IOfferPreview } from "../IOffer";
import { IUser } from "../IUser";
import { Liked } from "../MockDb";

export const getPreviewImage = (images: string[]) => images.length > 0 ? images[0] : NO_IMAGE;

export const getFormattedDate = (date: Date) => date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})

export const toOfferPreview = (offer: IOffer, liked: boolean): IOfferPreview => {
    return {...offer, liked}
}

export const filterOffers = (arr: IOfferPreview[], filterString: string) => arr.filter(o => {
    if(filterString.length == 0)
        return true;
    const filter = filterString.toLowerCase();
    return o.category.toLowerCase().startsWith(filter) || o.name.toLowerCase().startsWith(filter);
})