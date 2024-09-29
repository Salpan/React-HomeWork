import { useUnit } from 'effector-react';
import Commentary from './components/commentary/Commentary';
import './styles.css';
import {
    $comments,
    getAllCommentsEv,
    getCommentsFx,
} from '../../models/comments/comments';
import { useCallback, useEffect, useState } from 'react';
import { LikesCounter } from './components/likes-counter';
import {
    EffectorWrapper,
    Header,
    ThemeButton,
} from './components/styledComponents';
import { ThemeIcone } from './theme-icon/ThemeIcone';

export const EffectorPage = () => {
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
            <Header theme={theme}>Effector API learning</Header>
            <ThemeButton
                type="button"
                theme={theme}
                onClick={handleThemeChange}
            >
                <ThemeIcone />
            </ThemeButton>
            <LikesCounter />
            <div className="effector-commentary-wrapper">
                {isPending && 'No comments'}
                {comments.map((comment) => {
                    return (
                        <Commentary
                            theme={theme}
                            commentId={comment.id}
                            key={comment.id}
                            text={
                                comment.body[0].toUpperCase() +
                                comment.body.slice(1)
                            }
                        />
                    );
                })}
            </div>
        </EffectorWrapper>
    );
};
