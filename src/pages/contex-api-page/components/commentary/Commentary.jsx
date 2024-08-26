import { memo } from "react"

import '../../styles.css'
import { useState } from "react"
import { useCallback } from "react"


export const Commentary = ({ text }) => {
    const [likes, setLikes] = useState(0)

    const handleClick = useCallback(() => {
        setLikes((prev) => prev + 1)
    }, [setLikes])

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