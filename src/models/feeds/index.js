import { sample } from "effector";
import { $posts, getPostsEv, getPostsFx } from "./posts";

sample({
    clock: getPostsEv,
    target: getPostsFx
})

sample({
    clock: getPostsFx.doneData,
    fn: (posts) => posts,
    target: $posts
})