import { useUnit } from "effector-react"
import Commentary from "./components/commentary/Commentary"
import "./styles.css"
import { $comments, getAllCommentsEv } from "../../models/comments/comments"
import { $likes } from "../../models/likes/likes"
import { useEffect } from "react"

export const EffectorPage = () => {
    const likes = useUnit($likes)
    const comments = useUnit($comments)

    useEffect(() => {
        getAllCommentsEv()
    }, [])

    return (
        < div className="effector-wrapper" >
            <h3>Effector API learning</h3>
            <h4>Commentary</h4>
            <div className="effector-commentary-wrapper">
                {comments.map((comment) => {
                    return (
                        <Commentary key={comment.id} text={comment.body} />
                    )
                })}
            </div>
            <div>
                Likes:<span>{likes}</span>
            </div>
        </div >
    )
}