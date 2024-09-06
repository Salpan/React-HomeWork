import { useUnit } from 'effector-react';
import Commentary from './components/commentary/Commentary';
import './styles.css';
import {
    $comments,
    getAllCommentsEv,
    getCommentsFx,
} from '../../models/comments/comments';
import { $likes } from '../../models/likes/likes';
import { useCallback, useEffect, useState } from 'react';
import { EffectorWrapper, ThemeButton } from './components/styledComponents';
import { ThemeIcon } from './theme-icon/ThemeIcon';

export const EffectorPage = () => {
    const likes = useUnit($likes);
    const comments = useUnit($comments);
    const isPending = useUnit(getCommentsFx.pending);
    const [theme, setTheme] = useState('LIGHT');

    const handleThemeChange = useCallback(() => {
        setTheme((currentTheme) =>
            currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT',
        );
    }, []);

    useEffect(() => {
        getAllCommentsEv();
    }, []);

    return (
        <EffectorWrapper theme={theme}>
            <h3>Effector API learning</h3>
            <ThemeButton
                type="button"
                theme={theme}
                onClick={handleThemeChange}
            >
                <ThemeIcon />
            </ThemeButton>
            <div>
                Likes:<span>{likes}</span>
            </div>
            <div className="effector-commentary-wrapper">
                {isPending && 'No comments'}
                {comments.map((comment) => {
                    return (
                        <Commentary
                            key={comment.id}
                            text={
                                comment.body[0].toUpperCase() +
                                comment.body.slice(1)
                            }
                            style={{
                                alignSelf: comment.id % 2 ? 'start' : 'end',
                            }}
                        />
                    );
                })}
            </div>
        </EffectorWrapper>
    );
};
