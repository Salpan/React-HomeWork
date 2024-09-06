import { useUnit } from "effector-react";
import { memo } from "react"
import { $galleryUrl, $photoId } from "../../../../models/gallery/gallary";

const GalleryUrl = () => {
    const photoId = useUnit($photoId)
    const galleryUrl = useUnit($galleryUrl)

    return (
        <img src={`${galleryUrl}/${photoId}`} alt="blalb" />
    )
}

export default memo(GalleryUrl)