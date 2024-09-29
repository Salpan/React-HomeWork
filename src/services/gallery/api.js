const galleryUrl = 'https://dog.ceo/api/breeds/image/random';

export const getPicture = () => {
    return fetch(galleryUrl)
        .then((r) => r.json())
        .then((data) => data.message);
};
