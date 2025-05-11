import { NO_IMAGE } from "../constants";
import { IOfferPreview } from "../IOffer";

export const getPreviewImage = (images: string[]) => images.length > 0 ? images[0] : NO_IMAGE;

export const getFormattedDate = (date: Date) => date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})

export const filterOffers = (arr: IOfferPreview[], filterString: string) => arr.filter(o => {
    if(filterString.length == 0)
        return true;
    const filter = filterString.toLowerCase();
    return o.category.toLowerCase().startsWith(filter) || o.name.toLowerCase().startsWith(filter);
})