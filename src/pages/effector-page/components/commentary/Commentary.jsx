import { memo } from "react"

import '../../styles.css'
import { useState } from "react"
import { useCallback } from "react"
import { incLikesEv } from "../../../../models/likes/likes"
import { EffectorCommentary, EffectorCommentaryText } from "../styledComponents"


export const Commentary = ({ text, theme }) => {
    const [likes, setLikes] = useState(0)

    const handleClick = useCallback(() => {
        incLikesEv()
        setLikes((prev) => prev + 1)
    }, [])

    return (
        <EffectorCommentary theme={theme}>
            <EffectorCommentaryText theme={theme}>{text}</EffectorCommentaryText>
            <div
                className="effector-commentary-heart prevent-select"
                onClick={handleClick}
            >
                <div className="effector-comment-likes-counter">{likes}</div>
                <span>❤︎</span>
            </div>
        </EffectorCommentary>
    )
}

export default memo(Commentary)