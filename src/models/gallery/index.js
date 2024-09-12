import { sample } from "effector";
import { $picture, $pictureId, getPictureEv, getPictureFx } from "./gallery";

sample({
    clock: $pictureId,
    target: getPictureEv
})

sample({
    clock: getPictureEv,
    target: getPictureFx
})

sample({
    clock: getPictureFx.doneData,
    fn: (message) => message,
    target: $picture
})

