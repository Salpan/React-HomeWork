import { useCallback, useEffect, useReducer } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles.css';
import { Loader } from '../../common/components/loader/Loader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { Picture } from './components';
import {
    getPictureEv,
    getPictureUrlFx,
    nextPhotoIdEv,
    prevPhotoIdEv,
} from '../../models/gallery/gallary';
import { useUnit } from 'effector-react';

import {
    initialState,
    reducer,
    RENAME,
    UPDATE_AGE,
} from '../../common/consts/consts';

const Gallery = () => {
    const isPending = useUnit(getPictureUrlFx.pending);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getPictureEv();
    }, []);

    const previousPhotoHandler = useCallback(() => {
        prevPhotoIdEv();
    }, []);

    const nextPhotoHandler = useCallback(() => {
        nextPhotoIdEv();
    }, []);

    const handleRename = (name) => {
        dispatch({
            type: RENAME,
            payload: name,
        });
    };

    const handleChangeAge = (age) => {
        dispatch({
            type: UPDATE_AGE,
            payload: Number(age),
        });
    };

    return (
        <div className="gallery">
            <Button
                className="gallary-button"
                type="button"
                onClick={previousPhotoHandler}
            >
                {<ArrowBackIcon />}
            </Button>
            <div className="photo">
                {!isPending ? <Picture /> : <Loader loading={isPending} />}
            </div>
            <Button
                className="gallary-button"
                type="button"
                onClick={nextPhotoHandler}
            >
                {<ArrowForwardIcon />}
            </Button>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>Id: {state.id}</div>
                <div>Name: {state.name}</div>
                <input
                    name="name"
                    onChange={(e) => handleRename(e.target.value)}
                />
                <div>Age: {state.age}</div>
                <input
                    name="age"
                    type="number"
                    onChange={(e) => handleChangeAge(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Gallery;
