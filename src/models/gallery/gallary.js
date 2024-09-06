import { createEffect, createEvent, createStore } from 'effector';
import { getPictureUrl } from '../../services/gallary/api';

export const $galleryUrl = createStore(null);

export const getPictureEv = createEvent('getPictureEv');

export const getPictureUrlFx = createEffect(getPictureUrl);

export const $photoId = createStore(1);

export const nextPhotoIdEv = createEvent('nextPhotoIdEv');

export const prevPhotoIdEv = createEvent('prevPhotoIdEv');

$photoId
    .on(nextPhotoIdEv, (state) => state + 1)
    .on(prevPhotoIdEv, (state) => state - 1);
