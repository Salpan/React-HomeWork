import { createEffect, createEvent, createStore } from "effector";
import { getComments } from "../../services/comments/api";

export const $comments = createStore([]);

export const getAllCommentsEv = createEvent(getComments)

export const getCommentsFx = createEffect(getComments)



