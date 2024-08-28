import { memo, useContext } from "react"

import '../../styles.css'
import { useState } from "react"
import { useCallback } from "react"
import { LikesContext } from "../../ContextApiPage"


export const Commentary = ({ text }) => {
    const [likes, setLikes] = useState(0)
    const { addLikes } = useContext(LikesContext)

    const handleClick = useCallback(() => {
        setLikes((prev) => {
            const newValue = prev + 1
            addLikes(newValue)
            return newValue
        })
    }, [addLikes])

    return (
        <div className="context-commentary">
            <div className="contex-commentary-text">{text}</div>
            <div
                className="contex-commentary-heart prevent-select"
                onClick={handleClick}
            >
                <div className="context-comment-likes-counter">{likes}</div>
                <span>❤︎</span>
            </div>
        </div>
    )
}

export default memo(Commentary)