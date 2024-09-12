import { useCallback, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./styles.css";
import { Loader } from "../../../common/components/loader/Loader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import { Picture } from "./components";
import { getPictureEv, getPictureFx, nextPictureIdEv, prevPictureIdEv } from "../../../models/gallery/gallery";
import { useUnit } from "effector-react";

const Gallery = () => {
    const isPending = useUnit(getPictureFx.pending)

    useEffect(() => {
        getPictureEv()
    }, [])

    const previousPhotoHandler = useCallback(() => {
        prevPictureIdEv()
    }, []);

    const nextPhotoHandler = useCallback(() => {
        nextPictureIdEv()
    }, []);

    return (
        <div className="gallery">
            <Button className="gallary-button" type="button" onClick={previousPhotoHandler}>
                {<ArrowBackIcon />}
            </Button>
            <div className="photo">
                {!isPending ? (
                    <Picture />
                ) : (
                    <Loader loading={isPending} />
                )}
            </div>
            <Button className="gallary-button" type="button" onClick={nextPhotoHandler}>
                {<ArrowForwardIcon />}
            </Button>
        </div>
    );
};

export default Gallery;
