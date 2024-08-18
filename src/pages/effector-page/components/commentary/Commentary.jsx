import { memo, useCallback, useState } from 'react';

import '../../styles.css';
import { incLikes } from '../../../../models/likes/likes';

const Commentary = ({ text, style }) => {
    const [likes, setLikes] = useState(0);

    const handleClick = useCallback(() => {
        setLikes((prev) => prev + 1);
        incLikes();
    }, []);

    return (
        <div className="effector-commentary" style={style}>
            <div className="effector-commentary-text">{text}</div>
            <div
                className="effector-commentary-heart prevent-select"
                onClick={handleClick}
            >
                <div className="effector-comment-likes-counter">{likes}</div>
                <span>❤︎</span>
            </div>
        </div>
    );
};

export default memo(Commentary);
