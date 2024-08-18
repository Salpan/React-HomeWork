import { useUnit } from 'effector-react';
import { Commentary } from './components/commentary';
import './styles.css';
import { useEffect } from 'react';
import { $comments, getAllComments } from '../../models/comments/comments';
import { LikeCounter } from './components/like-counter';

const EffectorPage = () => {
    const comments = useUnit($comments);

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <div className="effector-wrapper">
            <h3>Effector learning</h3>
            <LikeCounter />
            <div className="effector-commentary-wrapper">
                {comments.length === 0 && 'No comments'}
                {comments.map((comment) => (
                    <Commentary
                        key={comment.id}
                        text={comment.body}
                        style={{
                            alignSelf: comment.id % 2 ? 'start' : 'end',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default EffectorPage;
