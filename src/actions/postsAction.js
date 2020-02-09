import axios from '../config/axios'

export const getPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        payload: posts
    }
}

export const startGetPosts = () => {
    console.log('test')
    return (dispatch) => {
        axios.get('/posts')
            .then(response => {
                const posts = response.data
                dispatch(getPosts(posts))
            })
            .catch(err => {
                alert(err)
            })
    }
}