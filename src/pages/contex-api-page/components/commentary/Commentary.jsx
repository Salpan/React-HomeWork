import { memo, useContext } from 'react';

import '../../styles.css';
import { useState } from 'react';
import { useCallback } from 'react';
import { LikesContext } from '../../ContextApiPage';

export const Commentary = ({ text }) => {
    const [likes, setLikes] = useState(0);
    const { addLikes, allLikes } = useContext(LikesContext);

    const handleClick = useCallback(() => {
        setLikes((prev) => prev + 1);
        addLikes();
    }, [addLikes]);

    return (
        <div className="context-commentary">
            <div className="context-commentary-text">{text}</div>
            <div
                className="context-commentary-heart prevent-select"
                onClick={handleClick}
            >
                <div className="context-comment-likes-counter">
                    {likes} {allLikes}
                </div>
                <span>❤︎</span>
            </div>
        </div>
    );
};

export default memo(Commentary);
