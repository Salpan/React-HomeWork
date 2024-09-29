import { useUnit } from 'effector-react';
import { memo } from 'react';
import { $likes } from '../../../../models/likes/likes';

const LikesCounter = () => {
    const likes = useUnit($likes);
    return (
        <div>
            Likes:<span>{likes}</span>
        </div>
    );
};

export default memo(LikesCounter);
