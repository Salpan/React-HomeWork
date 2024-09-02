import { sample } from 'effector';
import { $comments, getAllCommentsEv, getCommentsFx } from './comments';

sample({
    clock: getAllCommentsEv,
    target: getCommentsFx
})

sample({
    clock: getCommentsFx.doneData,
    fn: (comments) => comments,
    target: $comments,
})