import { createEffect, createEvent, createStore } from 'effector';
import { getComments } from '../../services/api';

export const $comments = createStore([]);

export const getAllComments = createEvent('getAllComments');

export const getCommentsFx = createEffect(getComments);
