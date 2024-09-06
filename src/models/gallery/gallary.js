import { createEffect, createEvent, createStore } from "effector";
import { getPicture } from "../../services/gallary/api";

export const $galleryUrl = createStore(null)

export const getPictureEv = createEvent(getPicture)

export const getPictureFx = createEffect(getPicture)

export const $photoId = createStore(1)

export const nextPhotoIdEv = createEvent('nextPhotoIdEv')

$photoId.on(nextPhotoIdEv, (state) => state + 1)
