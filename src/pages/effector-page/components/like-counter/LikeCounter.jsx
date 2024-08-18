import { memo } from 'react';
import { $likes } from '../../../../models/likes/likes';
import { useUnit } from 'effector-react';

const LikeCounter = () => {
    const likes = useUnit($likes);

    return (
        <div>
            Likes: <span>{likes}</span>
        </div>
    );
};

export default memo(LikeCounter);
