import { NO_IMAGE } from "../constants";

export const getPreviewImage = (images: string[]) => images.length > 0 ? images[0] : NO_IMAGE;