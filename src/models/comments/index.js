import { sample } from 'effector';

import { $comments, getAllComments, getCommentsFx } from './comments';

sample({
    clock: getAllComments,
    target: getCommentsFx,
});

sample({
    clock: getCommentsFx.doneData,
    fn: (comments) => {
        return comments.map(({ id, body }) => ({
            id,
            body,
        }));
    },
    target: $comments,
});
