import { createEvent, createStore } from "effector";

export const $likes = createStore(0);

export const incLikesEv = createEvent('incLikesEv')

$likes.on(incLikesEv, (state) => state + 1)