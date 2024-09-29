import { useEffect, useState } from 'react';
import './styles.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { $posts, getPostsEv } from '../../../models/feeds/posts';
import { useUnit } from 'effector-react';

export const Feed = () => {
    const [isClick, setIsClick] = useState(true);
    const posts = useUnit($posts);

    useEffect(() => {
        getPostsEv();
    }, []);

    const onClick = () => {
        setIsClick((prev) => !prev);
        posts.reverse();
    };

    return (
        <>
            <button
                className={isClick === true ? 'sort' : 'noSort'}
                type="button"
                onClick={onClick}
            >
                {isClick === true ? (
                    <KeyboardDoubleArrowUpIcon />
                ) : (
                    <KeyboardDoubleArrowDownIcon />
                )}
            </button>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <p>ID: {post.id}</p>
                            <p className="paragraph">
                                {post.title.toUpperCase()}
                            </p>
                            {post.body[0].toUpperCase() + post.body.slice(1)}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
