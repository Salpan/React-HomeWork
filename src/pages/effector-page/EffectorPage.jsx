import { useUnit } from "effector-react"
import Commentary from "./components/commentary/Commentary"
import "./styles.css"
import { $comments, getAllCommentsEv, getCommentsFx } from "../../models/comments/comments"
import { $likes } from "../../models/likes/likes"
import { useEffect } from "react"

export const EffectorPage = () => {
    const likes = useUnit($likes)
    const comments = useUnit($comments)
    const isPending = useUnit(getCommentsFx.pending)

    useEffect(() => {
        getAllCommentsEv()
    }, [])

    return (
        < div className="effector-wrapper" >
            <h3>Effector API learning</h3>
            <div>
                Likes:<span>{likes}</span>
            </div>
            <div className="effector-commentary-wrapper">
                {isPending && 'No comments'}
                {comments.map((comment) => {
                    return (
                        <Commentary key={comment.id}
                            text={comment.body[0].toUpperCase() + comment.body.slice(1)}
                            style={{
                                alignSelf: comment.id % 2 ? 'start' : 'end',
                            }} />
                    )
                })}
            </div>
        </div >
    )
}