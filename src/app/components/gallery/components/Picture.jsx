import { useUnit } from "effector-react"
import { $picture } from "../../../../models/gallery/gallery"


const Picture = () => {
    const pictureUrl = useUnit($picture)

    return <img style={{ objectFit: 'scale-down' }} src={pictureUrl} alt="sorry...smth wrong" />

}

export default Picture