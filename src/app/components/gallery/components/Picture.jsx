import { useUnit } from "effector-react"
import { $picture } from "../../../../models/gallery/gallery"


const Picture = () => {
    const pictureUrl = useUnit($picture)

    return <img className="dog-picture" src={pictureUrl} alt="sorry...smth wrong" />

}

export default Picture