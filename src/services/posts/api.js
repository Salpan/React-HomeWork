const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async () => {
    const r = await fetch(postsUrl)
    return await r.json()
}