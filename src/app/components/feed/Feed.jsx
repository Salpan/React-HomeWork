import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { Main } from "../main/Main"
import './styles.css'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const Feed = () => {

    const [post, setPost] = useState([])
    // const [onClick, setOnClick] = useState(true)


    fetch(url)
        .then((r) => r.json())
        .then((data) => {
            return setPost(data)
        })



    const onClick = useCallback(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                data.reverse()
                return setPost(data)
            })
    }, [])



    return (
        <>
            <Main />
            <button type="button" onClick={onClick}></button>
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
            })}

        </>
    )
}
