import { createEffect, createEvent, createStore } from "effector";
import { getPosts } from "../../services/posts/api";

export const $posts = createStore([])

export const getPostsEv = createEvent(getPosts)

export const getPostsFx = createEffect(getPosts)


