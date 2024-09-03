const galleryUrl = "https://jsonplaceholder.typicode.com/photos";
// const photoId = 1

export const getPicture = () => {
    return fetch(galleryUrl).then((r) => r.json()).then((data) => data.url)
}