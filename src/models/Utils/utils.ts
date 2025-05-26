import { NO_IMAGE } from "../constants";
import { IOffer, IOfferPreview } from "../IOffer";
import { IUser } from "../IUser";

export const getPreviewImage = (images: string[]) => images.length > 0 ? images[0] : NO_IMAGE;

export const toOfferPreview = (offer: IOffer): IOfferPreview => {
    return offer;
}

export const filterOffers = (arr: IOfferPreview[], filterString: string) => arr.filter(o => {
    if(filterString.length == 0)
        return true;
    const filter = filterString.toLowerCase();
    return o.category.toLowerCase().startsWith(filter) || o.name.toLowerCase().startsWith(filter) || o.description.includes(filter);
})