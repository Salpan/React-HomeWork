const galleryUrl = 'https://dog.ceo/api/breeds/image/random';

export const getPictureUrl = () => {
    return fetch(galleryUrl)
        .then((r) => r.json())
        .then((data) => data.message);
};
