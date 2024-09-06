const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'

export const getComments = () => {
    return fetch(commentsUrl).then((r) => r.json())
}