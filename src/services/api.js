const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export const getComments = () => {
    return fetch(commentsUrl)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error);
};
