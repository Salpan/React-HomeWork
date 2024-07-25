import { useCallback, useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles.css";
import { Loader } from "../../../common/components/loader/Loader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const url = "https://jsonplaceholder.typicode.com/photos";

const Gallery = () => {
    const [photoId, setPhotoId] = useState(1);
    const [photoUrl, setPhotoUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${url}/${photoId}`)
            .then((r) => r.json())
            .then((data) => {
                setPhotoUrl(data.url);
                setIsLoading(false);
            });
    }, [photoId]);

    const previousPhotoHandler = useCallback(() => {
        setPhotoId((prev) => {
            if (prev <= 1) {
                return 1;
            }

            return prev - 1;
        });
    }, []);

    const nextPhotoHandler = useCallback(() => {
        setPhotoId((prev) => prev + 1);
    }, []);

    return (
        <div className="gallery">
            <button className="gallary-button" type="button" onClick={previousPhotoHandler}>
                {<ArrowBackIcon />}
            </button>
            <div className="photo">
                {!isLoading ? (
                    <img src={photoUrl} alt={`#${photoId}`} />
                ) : (
                    <Loader loading={isLoading} />
                )}
            </div>
            <button className="gallary-button" type="button" onClick={nextPhotoHandler}>
                {<ArrowForwardIcon />}
            </button>
        </div>
    );
};

export default Gallery;
