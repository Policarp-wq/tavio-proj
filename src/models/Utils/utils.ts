import { NO_IMAGE } from "../constants";

export const getPreviewImage = (images: string[]) => images.length > 0 ? images[0] : NO_IMAGE;

export const getFormattedDate = (date: Date) => date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})