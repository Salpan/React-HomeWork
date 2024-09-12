import { createEffect, createEvent, createStore } from "effector";
import { getPicture } from "../../services/gallery/api";

export const $pictureId = createStore(1)

export const $picture = createStore(null)

export const getPictureEv = createEvent('getPictureEv')

export const getPictureFx = createEffect(getPicture)

export const nextPictureIdEv = createEvent('nextPictureIdEv')

export const prevPictureIdEv = createEvent('prevPictureIdEv')

$pictureId
    .on(nextPictureIdEv, (state) => state + 1)
    .on(prevPictureIdEv, (state) => state - 1)