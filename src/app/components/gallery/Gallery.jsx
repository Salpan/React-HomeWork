import { useCallback, useEffect, useState } from "react"
import { Loader } from "../../../common/components/Loader/Loader"
import './styles.css'

const url = 'https://jsonplaceholder.typicode.com/photos'

const Gallery = () => {
    const [photoId, setPhotoId] = useState(2)
    const [photoUrl, setPhotoUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)

        fetch(`${url}/${photoId}`)
            .then((resolve) => resolve.json())
            .then((data) => setPhotoUrl(data.url))
    }, [photoUrl])

    const previusPhotoHandler = useCallback(() => {
        setPhotoId((prev) => {
            if (prev <= 1) {
                return 1
            }

            return prev - 1
        })
    }, [])

    const nextPhotoHandler = useCallback(() => {
        setPhotoId((prev) => prev + 1)
    }, [])

    return (
        <>
            <button type="button" onClick={previusPhotoHandler}>
                {'<-'}
            </button>
            <img src={photoUrl} />
            <Loader loading={isLoading} />
            <button type="button" onClick={nextPhotoHandler}>
                {'->'}
            </button>
        </>
    )
}

export default Gallery