import { useEffect, useState } from "react";
import "./styles.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const url = "https://jsonplaceholder.typicode.com/posts";

export const Feed = () => {
    const [post, setPost] = useState([]);
    const [isClick, setIsClick] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setPost(data);
            });
    }, []);

    const onClick = () => {
        setIsClick((prev) => !prev);
        setPost((prev) => prev.reverse());
    };

    return (
        <>
            <button
                className={isClick === true ? "sort" : "noSort"}
                type="button"
                onClick={onClick}
            >
                {isClick === true ?
                    < KeyboardDoubleArrowUpIcon /> :
                    <KeyboardDoubleArrowDownIcon />}
            </button>
            <ul>
                {post.map((post) => {
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
