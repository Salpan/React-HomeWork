import { createEvent, createStore } from 'effector';

export const $likes = createStore(0);

export const incLikes = createEvent('incLikes');

$likes.on(incLikes, (state) => state + 1);
