import { createEffect, createEvent, createStore } from "effector";
import { getComments } from "../../services/coments/api";

export const $comments = createStore([]);

export const getAllCommentsEv = createEvent(getComments)

export const getCommentsFx = createEffect(getComments)



