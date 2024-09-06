import { useUnit } from 'effector-react';
import { $galleryUrl } from '../../../models/gallery/gallary';

export const Picture = () => {
    const galleryUrl = useUnit($galleryUrl);

    return (
        <img src={galleryUrl} alt="user" style={{ objectFit: 'scale-down' }} />
    );
};
