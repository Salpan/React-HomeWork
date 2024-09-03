import { sample } from "effector";
import { $galleryUrl, getPictureEv, getPictureFx, nextPhotoIdEv } from "./gallary";

sample({
    clock: getPictureEv,
    target: getPictureFx
})

sample({
    clock: getPictureFx.doneData,
    fn: (picture) => picture,
    target: $galleryUrl
})
