import { useCallback, useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles.css";
import { Loader } from "../../../../common/components/loader/Loader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import { GalleryUrl } from "../components";
import { getPictureEv } from "../../../../models/gallery/gallary";

const url = "https://jsonplaceholder.typicode.com/photos";

const Gallery = () => {
    const [photoId, setPhotoId] = useState(1);
    const [photoUrl, setPhotoUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPictureEv()
    }, [])

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
            <Button className="gallary-button" type="button" onClick={previousPhotoHandler}>
                {<ArrowBackIcon />}
            </Button>
            <div className="photo">
                {!isLoading ? (
                    <GalleryUrl />
                ) : (
                    <Loader loading={isLoading} />
                )}
            </div>
            <Button className="gallary-button" type="button" onClick={nextPhotoHandler}>
                {<ArrowForwardIcon />}
            </Button>
        </div>
    );
};

export default Gallery;
