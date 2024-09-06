import { sample } from 'effector';
import {
    $galleryUrl,
    $photoId,
    getPictureEv,
    getPictureUrlFx,
} from './gallary';

sample({
    clock: $photoId,
    target: getPictureEv,
});

sample({
    clock: getPictureEv,
    target: getPictureUrlFx,
});

sample({
    clock: getPictureUrlFx.doneData,
    fn: (message) => message,
    target: $galleryUrl,
});
