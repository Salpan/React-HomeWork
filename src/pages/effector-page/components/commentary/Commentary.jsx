import { memo } from "react"

import '../../styles.css'
import { useState } from "react"
import { useCallback } from "react"
import { incLikesEv } from "../../../../models/likes/likes"


export const Commentary = ({ text, style }) => {
    const [likes, setLikes] = useState(0)

    const handleClick = useCallback(() => {
        incLikesEv()
        setLikes((prev) => prev + 1)
    }, [])

    return (
        <div className="effector-commentary" style={style}>
            <div className="effector-commentary-text">{text}</div>
            <div
                className="effector-commentary-heart prevent-select"
                onClick={handleClick}
            >
                <div className="effector-comment-likes-counter">{likes}</div>
                <span>❤︎</span>
            </div>
        </div>
    )
}

export default memo(Commentary)