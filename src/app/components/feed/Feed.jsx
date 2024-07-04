import { useEffect, useState } from "react"
import { Main } from "../main/Main"
import './styles.css'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const Feed = () => {

    const [post, setPost] = useState([])
    const [isClick, setIsClick] = useState(true)

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                return setPost(data)
            })
    }, [])

    const onClick = () => {
        setIsClick(prev => !prev)
        if (isClick === true) {
            fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    data.reverse()
                    return setPost(data)
                })
        } else {
            fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    return setPost(data)
                })
        }
    }

    return (
        <>
            <Main />
            <button className={
                isClick === true ? "sort" : "noSort"
            }
                type="button" onClick={onClick}>
                {isClick === true ? `↑` : `↓`}
            </button >
            {post.map((post) => {
                return (
                    <ul>
                        <li>
                            <p className="paragraph">
                                {post.title.toUpperCase()}
                            </p>
                            {post.body[0].toUpperCase() + post.body.slice(1)}
                        </li>
                    </ul>
                )
            })
            }
        </>
    )
}
